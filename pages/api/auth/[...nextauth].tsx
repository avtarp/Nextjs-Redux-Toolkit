import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'
import { useRef } from 'react'

const YOUR_API_ENDPOINT ='http://3.230.233.62/rails/api/v1/authentication'

const options = {
  providers:[
    Providers.Credentials({
      name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // credentials: {
    //   email: { label: "email", type: "text", placeholder: "jsmith" },
    //   password: {  label: "Password", type: "password" }
    // },
    async authorize(credentials, req) {
      const dataWeNeed = {email: credentials.email,password:credentials.password,remember:false}
      const authData = await axios.post(`${YOUR_API_ENDPOINT}/user_login`,dataWeNeed)
      const dataReceived= authData.data


      // axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>console.log(res.data))
      // Add logic here to look up the user from the credentials supplied

      //  console.log(user)
      if (dataReceived) {
        console.log('form user', dataReceived)
        if(dataReceived?.success === true){
          console.log('form user insidde', dataReceived)
          const {user} = dataReceived;
      
          // Any object returned will be saved in `user` property of the JWT
          return {...user,auth_token:dataReceived.auth_token}
        }
        else {
          console.log('from error', dataReceived)
          // If you return null or false then the credentials will be rejected
          throw Error(`${dataReceived?.message}`)
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
   
      } 
      return null
    }
    }),
  ],
 
  callbacks:{
      async jwt(token:any, user:any) {
        console.log('from callback',user,token)

        if (user) {
           token.accessToken = user.auth_token
        }
        return token      },
      
      async session (session:any,token:any){
        session.accessToken = token.accessToken
        return session
      },
        async redirect (url:any, baseUrl:any){
      return Promise.resolve(url)
    }
    },
    session: {
      // Use JSON Web Tokens for session instead of database sessions.
      // This option can be used with or without a database for users/accounts.
      // Note: `jwt` is automatically set to `true` if no database is specified.
      jwt: true,
    
      // Seconds - How long until an idle session expires and is no longer valid.
      // maxAge: 30 * 60 * 60 * 24, // 30 days
      maxAge: 30 * 60 * 60 * 24,
    
      // Seconds - Throttle how frequently to write to database to extend a session.
      // Use it to limit write operations. Set to 0 to always update the database.
      // Note: This option is ignored if using JSON Web Tokens
      // updateAge: 24 * 60 * 60, // 24 hours
    },
    pages:{
      signIn:'/auth/credential-signin',
      error:'/auth/credential-signin'
    }


}

// const callbacks = {
//   async jwt(token:any, user:any) {
//     if (user) {
//       token.accessToken = user.data.token
//     }

//     return token
//   },

//   async session(session:any, token:any) {
//     session.accessToken = token.accessToken
//     return session
//   }
// }

// const options = {
//   providers,
//   callbacks,
//   pages: {
    // error: '/auth/credential-signin' // Changing the error redirect page to our custom login page
//   }
// }

export default function  (req:any, res:any) { 
  NextAuth(req, res, options)
}
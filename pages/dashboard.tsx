import { getSession } from "next-auth/client"
import { useState } from "react";
import GetTokenValue from '../hooks/getTokenValue'

const Dashboard = () =>{
    const token = GetTokenValue()
    // const [token,setToken] = useState<string | any>('')
    // const session =async () =>{
    //     const userDetails = await getSession();
    //     setToken(userDetails?.accessToken)
    //     console.log(token)
    // }
    // session()
        
    return (
        <>
        <h3>TOken: {token} </h3>
        
        </>
    )
}
export default Dashboard

// export async function getServerSideProps({ req, res }:any) {
//     const session = await getSession({ req })
//     console.log('from dashboard',session)
//     if (!session) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       }
//     }
//     return {
//       props: {},
//     };
//   }
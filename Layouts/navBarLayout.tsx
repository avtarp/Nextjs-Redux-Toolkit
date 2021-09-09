import { Box } from "@material-ui/core";
import Link from 'next/link'
import React from "react";

export default function NavBar ({children}:{children:React.ReactNode}):JSX.Element{
    return (
        <>
      <Box style={{background:'teal', height:'60px', color:'white', padding:'20px'}}>
        <Link href = '/todo_list'>
              <a style={{fontWeight:'bold', marginRight:'10px'}}>TODO</a>
          </Link>
          <Link href = '/'>
              <a style={{fontWeight:'bold'}}>HOME</a>
          </Link>
      </Box>
     
      {children}
      </>
    )
}
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import React, { useState } from "react";
import { signIn, signOut } from "next-auth/client";
import GetTokenValue from "../pages/hooks/getTokenValue";
export default function NavBar({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const tokenValue = GetTokenValue();
 
  const userSignIn = () => {
    signIn();
  };
  const userSignOut = () => {
    signOut({
      callbackUrl: `/`,
    });
  };
  return (
    <>
      {" "}
      <Box>
	
        <Box
          style={{
            background: "teal",
            height: "60px",
            color: "white",
            padding: "20px",
			display: 'flex',
			justifyContent:'space-between'
          }}
        >
        <Box><Link href="/todo_list">
            <a style={{ fontWeight: "bold", marginRight: "10px" }}>TODO</a>
          </Link>
          <Link href="/">
            <a style={{ fontWeight: "bold" }}>HOME</a>
          </Link>
          <Link href="/posts">
            <a style={{ fontWeight: "bold", marginLeft: "10px" }}>POSTS</a>
          </Link></Box>
		  <Box

		  >
          {!tokenValue && <Button onClick={userSignIn} style={{ fontWeight: "bold", marginLeft: "15px", color: "white", }}>Sign In </Button>}
          {tokenValue && <Button onClick={userSignOut} style={{ fontWeight: "bold", marginLeft: "15px", color: "white", }}>Sign out </Button>}
        </Box>
        </Box>
      
      </Box>
      {children}
    </>
  );
}

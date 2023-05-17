'use client'

/* import {signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import { BsPersonPlus } from 'react-icons/bs'

export default function userAuth({session}) {
    return (
        <>
            {!session ? (
                <button><BsPersonPlus /></button>
            ) : (
                <button><Image /></button>
            )
            }
        </>
    )
} */

import Image from 'next/image';
import { BsPersonPlus } from 'react-icons/bs'
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"

export default function UserAuthentication() {
  const { session } = useSession()
  if (session) {
    return (
      <SessionProvider>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}><Image /></button>
      </SessionProvider>
    )
  }
  return (
    <SessionProvider>
      Not signed in <br />
      <button onClick={() => signIn()}><BsPersonPlus /></button>
    </SessionProvider>
  )
}
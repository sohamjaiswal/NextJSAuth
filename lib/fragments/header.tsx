'use client';

import { useSession } from "next-auth/react"

export const Header = () => {
  const {data: session} = useSession()
  
  return (
    <header className="flex justify-between">
      <div className="flex gap-4">
        <h1 className="font-bold ml-4">LOGO</h1>
        <ul className="flex gap-4">
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {session ? 
      <div className="flex gap-4">
        <a href="/api/auth/signout">
          Logout
        </a>
      </div>
      : 
      <div className="flex gap-4">
        <a href="/register">
          Register
        </a>
        <a href="/api/auth/signin">
          Login
        </a>
      </div> }
    </header>
  )
}

import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <h1>Home</h1>
    <pre>
    {session ? JSON.stringify(session, null, 2) : ''}
    </pre>
  </main>
  )
}
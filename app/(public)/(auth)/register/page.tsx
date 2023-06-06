export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login</h1>
      <form action="">

        <label className="label" htmlFor="email">
          Email
          <input className="input" type="email" name="email" id="email" />
        </label>

        <label className="label" htmlFor="password">
          Password
          <input className="input" type="password" name="password" id="password" />
        </label>

        

      </form>
    </main>
  )
}
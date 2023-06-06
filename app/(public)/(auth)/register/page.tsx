export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="my-4">Login</h1>
      <form action="/api/register" method="POST" className="flex flex-col items-end gap-4 text-white">

      <label className="label" htmlFor="name">
          Username
          <input className="input text-black" type="text" name="name" id="name" />
        </label>

        <label className="label" htmlFor="email">
          Email
          <input className="input text-black" type="email" name="email" id="email" />
        </label>

        <label className="label" htmlFor="password">
          Password
          <input className="input text-black" type="password" name="password" id="password" />
        </label>

        <label className="label" htmlFor="conf_password">
          Confirm Password
          <input className="input text-black" type="password" name="conf_password" id="conf_password" />
        </label>

        <label className="label" htmlFor="phone">
          Phone
          <input className="input text-black" type="text" name="phone" id="phone" />
        </label>

        <label className="label" htmlFor="address">
          Address
          <textarea className="input text-black" name="address" id="address" />
        </label>
        <button type="submit">
          Submit
        </button>

      </form>
    </main>
  )
}
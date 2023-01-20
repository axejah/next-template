import {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react"

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (values) => {
      values.preventDefault();

      const status = await signIn('credentials', {
            redirect: false,
            email,
            password,
            callbackUrl: "/"
        })

        if(status.ok) router.push(status.url)

    }

  return ( 

    <main className="container" onSubmit={onSubmit}>
      <article className="grid">
        <div>
          <hgroup>
            <h1>Log In</h1>
            <p>Get things done.</p>
          </hgroup>
          <form onSubmit={onSubmit}>
            <input type="email" name="email" placeholder="Email address"  required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="contrast">Log In</button>
            <Link href="/register">No account yet? Register here</Link>
          </form>
        </div>
        <div></div>
      </article>
    </main>

  )
}
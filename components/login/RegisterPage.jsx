import { useRouter } from 'next/router';
import Link from 'next/link'

import { useFormik } from 'formik';
import { registerValidate } from '../../lib/validate'

export default function RegisterPage() {

  const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cpassword: ''
        },
        validate: registerValidate,
        onSubmit
    })

   async function onSubmit(values) {
      const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/register', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000')
            })
    }

  return (
    <main className="container">
      <article className="grid">
        <div>
          <hgroup>
            <h1>Register</h1>
            <p>Get things done.</p>
          </hgroup>
          <form onSubmit={formik.handleSubmit}>
            <input type="email" name="email" placeholder="Email address" {...formik.getFieldProps('email')} />
            {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
            <input type="password" name="password" placeholder="Password" {...formik.getFieldProps('password')} />
            {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
            <input type="password" name="cpassword" placeholder="Confirm Password" {...formik.getFieldProps('cpassword')} />
            {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>}
            <button type="submit" className="contrast">Register account</button>
            <Link href="/login">Already have an account? Log in here</Link>
          </form>
        </div>
        <div></div>
      </article>
    </main>
  )
}

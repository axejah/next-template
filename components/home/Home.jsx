import Link from 'next/link'

const Home = () => {
  return (
    <main className='container-fluid'>
    <article>
    <header>
    <div className="container text-center">
        <h1 className="m-6 text-6xl">Welcome to DailyDynamo</h1>
        <p>This will be your ultimate tool for managing day to day activities!</p>
    
    <Link href="/register" role="button" className='secondary m-3'>Register</Link>
    <Link href="/login" role="button" className='contrast outline m-3'>Log In</Link>
    </div>
    </header>
    </article>
    </main>
  )
}

export default Home
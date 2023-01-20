const Dashboard = () => {
  return (
    <main className='container-fluid'>
    <article>
    <header>
    <div className="container text-center">
        <h1 className="m-6 text-6xl">Welcome to your dashboard</h1>
        <p>Let's get started!</p>
    </div>
    </header>
    <body>
        <div className="grid">
            <div>Tasks</div>
            <div>Epics</div>
            <div>Schedule</div>
            <div>Progress</div>
        </div>
    </body>
    </article>
    </main>
  )
}

export default Dashboard
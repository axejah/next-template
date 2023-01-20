
import Link from 'next/link'
import { useState } from 'react'

import {useSession, getSession, signOut } from "next-auth/react"

const NavBar = () => {

  const {data: session} = useSession();

  function handleSignOut() {
    signOut();
  }

const [colorModeDark, setColorModeDark] = useState(false)

function switchTheme() {
    setColorModeDark(!colorModeDark)

    if (colorModeDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
 
  return (
    <>
<nav className="container">
  <ul>
    <li><strong><Link style={{color: '#fefefe'}} href="/">DailyDynamo</Link></strong></li>
  </ul>
  <ul>
    
    {!session ? <><li><Link href="#">Features</Link></li> <li><Link href="#">About us</Link></li></> : <Link href="/profile">Profile</Link>}
    <li>{session ? <button onClick={handleSignOut} className='contrast outline'>Log Out</button> : <Link href="/login" role="button" className='contrast outline'>Log In</Link>}</li>
    <li>
    <input type="checkbox" id="switch" name="switch" role="switch" onChange={() => switchTheme()} checked={colorModeDark} />
 
    </li>
  </ul>
</nav>
    </>
  )
}

export default NavBar
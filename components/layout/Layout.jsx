import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <NavBar />
     <div className='container md mx-auto p-6'>{children}</div>
    <Footer />
     </>
  )
}

export default Layout
import Layout from '../components/layout/Layout'
import Home from '../components/home/Home'
import Dashboard from '../components/dashboard/Dashboard'

import { getSession, useSession, signOut} from "next-auth/react"

export default function index() {
  const {data: session} = useSession();

  return (
    <>
    <Layout>
      { session ? <Dashboard /> : <Home /> }
    </Layout>
    </>
  )
}



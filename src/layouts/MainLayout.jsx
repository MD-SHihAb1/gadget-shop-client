import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from './Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
      <div>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default MainLayout

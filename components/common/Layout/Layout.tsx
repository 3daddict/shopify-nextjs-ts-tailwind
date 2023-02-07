import { FC } from 'react'
import Navbar from '@components/common/Navbar'
import Footer from '@components/common/Footer'

const Layout: FC = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

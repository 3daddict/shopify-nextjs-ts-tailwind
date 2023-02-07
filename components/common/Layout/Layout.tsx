import { FC } from 'react'
import s from './Layout.module.css'

const Layout: FC = ({ children }: any) => {
  return (
    <div>
      <main className="fit">{children}</main>
    </div>
  )
}

export default Layout

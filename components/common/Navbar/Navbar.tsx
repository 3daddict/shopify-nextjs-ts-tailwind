import { FC } from 'react'
import { Container } from '@components/ui'
import Link from 'next/link'
import { Usernav } from '@components/common'

const navLinks = [
  {
    name: 'All',
    href: '/',
  },
  {
    name: 'Clothing',
    href: '/clothing',
  },
  {
    name: 'Accessories',
    href: '/accesories',
  },
  {
    name: 'Shoes',
    href: '/shoes',
  },
]

const Navbar: FC = () => {
  return (
    <Container>
      <div className="flex flex-row md:py-6">
        <div className="flex items-center flex-1">
          <Link className="text-2xl font-bold" href="/">
            GTFOL
          </Link>
          <nav className="ml-6 space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className="font-medium leading-6 text-gray-500 transition hover:text-gray-900 text-accents-6 hover:text-accents-9"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end flex-1 spaxe-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar

'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const routes = [
    {
      name: 'Início',
      path: '/',
      active: pathname === '/',
    },
    {
      name: 'Produtos',
      path: '/products',
      active: pathname === '/products',
    },
    {
      name: 'Sobre',
      path: '/about',
      active: pathname === '/about',
    },
    {
      name: 'Contato',
      path: '/contact',
      active: pathname === '/contact',
    },
  ]

  return (
    <nav className='ml-4 hidden md:block'>
      <ul className='flex gap-2'>
        {routes.map(route => (
          <li key={route.name}>
            <Link
              href={route.path}
              className={cn('rounded-lg px-4 py-2 font-semibold text-white ')}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

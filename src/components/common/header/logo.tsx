import LogoPrisma from '@/assets/icon/logo'
import Link from 'next/link'

export default function HeaderLogo() {
  return (
    <Link href={'/'}>
      <LogoPrisma className='h-8 w-8' />
    </Link>
  )
}

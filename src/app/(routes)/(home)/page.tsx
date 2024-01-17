import Link from 'next/link'

import Container from '@/components/container'

export default function Home() {
  return (
    <Container>
      <div className='space-y-16'>
        <div>
          <Link
            href={'/categories/featured'}
            className='block w-fit'
          >
            <h1 className='mb-4 text-xl font-bold hover:underline'>
              Soluções em destaque
            </h1>
          </Link>
        </div>

        <div>
          <div className='mb-4 flex w-full items-center justify-between'>
            <Link href={'/categories/hcm'}>
              <p className='text-lg font-bold'>Soluções HCM</p>
            </Link>

            <Link href={'/categories/hcm'}>
              <p className='text-sm font-semibold text-primary hover:underline'>
                Mostrar tudo
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

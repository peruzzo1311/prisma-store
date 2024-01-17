import Image from 'next/image'

import { Card } from '@/components/ui/card'

import banner from '@/assets/images/banner-app.png'

export default function ProductCardFeatured() {
  return (
    <Card className='group mx-auto max-w-xs cursor-pointer overflow-hidden rounded-lg drop-shadow '>
      <div className='overflow-hidden'>
        <Image
          alt='Profile photo'
          className='h-56 w-full object-cover transition duration-200 ease-in-out group-hover:scale-110'
          src={banner}
          priority
        />
      </div>

      <div className='flex items-center justify-between bg-primary-900 px-4 py-2'>
        <h1 className='font-bold text-gray-200'>
          Prisma gestão de inventários
        </h1>
      </div>

      <div className='px-4 py-2'>
        <p className='mt-2 line-clamp-3 text-sm text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nesciunt
          labore, quasi libero reprehenderit rem ut illo a tempora quaerat.
          Voluptas blanditiis mollitia odio quis laudantium, quisquam
          praesentium architecto nam.
        </p>

        <h1 className='mt-4 text-2xl font-bold text-primary'>R$ 100,00</h1>
      </div>
    </Card>
  )
}

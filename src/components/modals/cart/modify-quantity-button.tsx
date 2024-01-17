'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../ui/button'

export default function ModifyQuantityButton() {
  const [quantity, setQuantity] = useState(1)

  const handleChange = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      setQuantity(prev => prev + 1)
    } else {
      if (quantity === 1) {
        return
      }

      setQuantity(prev => prev - 1)
    }
  }

  return (
    <div className='flex items-center justify-end rounded-md'>
      <Button
        size={'icon'}
        className='h-6 w-6 rounded-none rounded-l-md'
        onClick={() => handleChange('minus')}
      >
        <Minus className='h-4 w-4' />
      </Button>

      <span className='mx-2 text-lg'>{quantity}</span>

      <Button
        size={'icon'}
        className='h-6 w-6 rounded-none rounded-r-md'
        onClick={() => handleChange('plus')}
      >
        <Plus className='h-4 w-4' />
      </Button>
    </div>
  )
}

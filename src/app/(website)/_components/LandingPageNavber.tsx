import { Menu, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/grok-icon.webp'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const LandingPageNavber = () => {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className=' text-2xl font-semibold gap-x-3 flex items-center'>
        <Menu className='w-8 h-8'/>
        <Image src={logo} width={50} height={50} alt='logo' />
        Opal
      </div>
      <div className=' hidden gap-x-10 lg:flex items-center'>
        <Link href='/' className=' px-5 py-2 font-semibold bg-[#7320dd] hover:bg-[#7320dd]/80 text-lg rounded-full'>Home</Link>
        <Link href='/'>Pricing</Link>
        <Link href='/'>Contact</Link>
      </div>
      <Link href='/auth/sign-in'>
      <Button className='text-base flex gap-x-2'>
     <User  fill='#000' /> Login
      </Button>
      </Link>
    </div>
  )
}

export default LandingPageNavber

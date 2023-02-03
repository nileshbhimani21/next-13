import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { ComponentProps } from 'types/components';

export default function UserLayout({ children }: ComponentProps) {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='w-[calc(100%-300px)]'>
        <Navbar />
        <main className='p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}

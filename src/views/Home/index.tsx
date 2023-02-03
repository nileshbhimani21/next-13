'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (<>    
    <main className="container flex justify-center items-center min-h-screen">
            <div className='lg:w-50 w-full'>
                <h1 className="text-primary">
                    Welcome to Next.js!
                </h1>
                <Link className='btn btn-primary' href='/admin'>Dashboard</Link>
            </div>
            <div className='lg:w-50 w-full'>
                <Image src='/images/data-points.svg' className='w-full' alt='Login' width={100} height={100} />
            </div>
        </main>
    </>)
}
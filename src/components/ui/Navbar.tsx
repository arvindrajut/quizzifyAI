
import { getAuthSession } from '@/lib/nextauth';
import Link from 'next/link';
import React from 'react'
import SignInButton from './SignInButton'
import { ThemeToggle } from './ThemeToggle';
import UserAccountNav from './UserAccountNav';
type Props = {}

const Navbar = async (props: Props) => {
    const session = await getAuthSession()
    return(
        <div className='fixed inset-x-0 top-0 bg-white dark:bg:gray-950 h-fit border-b border-zinc-500 py-1'>
            <div className='flex items-center justify-between h-full gap-2 px-8 py-5 mx-auto max-w-7x1 '>
                <Link href='/' className="flex items-center gap-2">
                <p className='rounded-lg border-2 border-b-4 border-r-2 border-black px-1 py-1 text-x1 transition-all hover:-translate-y-[2px] md:block dark:border-white'>Quizzify-AI</p>
                </Link>
                <div className="flex items-center ">
                <ThemeToggle className='mr-4'/>
                <div className='flex items-center'>
                    {session?.user ? (<UserAccountNav user={session.user}/>) :(
                    <SignInButton text='Sign In' />)
                    }
                </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
"use client";
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu'
import {LogOut} from "lucide-react"
import UserAvatar from './UserAvatar';
type Props = {
  user: Pick<User,"name" | "image" | "email">
}

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && (<p className='w-[200px] truncate text-sm text-zinc-700'>{user.email}</p>)}
          </div>
        </div>
        <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href='/'>Mewww</Link>
          </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(e) => {
            e.preventDefault
            signOut().catch(console.error)
          }} className="bg-red-700 text-gray-200 font-medium cursor-pointer cursor:{bg-grey-800 text-red-600}"><LogOut className='w-4 h-4 ml-2'/></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
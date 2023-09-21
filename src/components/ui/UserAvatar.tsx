import React from 'react'
import {User} from 'next-auth'
import { Avatar } from './avatar'
import Image from 'next/image'
import { AvatarFallback } from '@radix-ui/react-avatar'
type Props = {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar = ({user}: Props) => {
  return (
   <Avatar>
    {user.image ? (
      <div className='relative h-full w-full aspect-square'>
        <Image fill src={user.image} alt="profile image" referrerPolicy='no-referrer' />
      </div>
    ): (<AvatarFallback><span className='sr-only'>{user.name}</span></AvatarFallback>)}
   </Avatar>
  )
}

export default UserAvatar
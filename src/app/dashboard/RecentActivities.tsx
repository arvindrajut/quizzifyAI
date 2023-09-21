import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

const RecentActivities = (props: Props) => {
  return (
    <Card className='col-span-4 lg:col-span-3'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold'>Recent Activities</CardTitle>
            <CardDescription>You have played total of 7 games!</CardDescription>
        </CardHeader>
        <CardContent className='max-h-[560px] overflow-scroll'>
            TODO: Histories Component 
        </CardContent>
    </Card>
  )
}

export default RecentActivities
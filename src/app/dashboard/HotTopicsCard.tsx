import CustomWordCloud from '@/components/CustomWordCloud'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

const HotTopicsCard = (props: Props) => {
  return (
    <Card className='col-span-4'>
        <CardHeader>
            <CardTitle className="text-2x1 font-bold"> Hot Topics!</CardTitle>
            <CardDescription>
                Click on a topic to start quiz!
            </CardDescription>
        </CardHeader>
        <CardContent className='pl-2'>
        <CustomWordCloud />
        </CardContent>
    </Card>
  )
}

export default HotTopicsCard
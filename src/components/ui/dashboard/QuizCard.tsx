
"use client";
import { BrainCircuit } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../card'

type Props = {}

const QuizCard = (props: Props) => {
    const router = useRouter()
  return (
    <Card className='hover:cursor-pointer hover:opacity-70' onClick={() => {
        router.push("/quiz")
    }}>
        <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-2xl font-bold'>START QUIZ</CardTitle>
        <BrainCircuit size={28} strokeWidth={2.5} />
        </CardHeader>

        <CardContent>
            <p className='text-sm text-muted-foreground'>
                Challenge yourself with a quiz!
            </p>
        </CardContent>

    </Card>
  )
}

export default QuizCard
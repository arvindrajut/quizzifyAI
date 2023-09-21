import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation';
import React from 'react'
import QuizCard from '@/components/ui/dashboard/QuizCard';
import HistoryCard from '@/components/ui/dashboard/HistoryCard';
import HotTopicsCard from './HotTopicsCard';
import RecentActivities from './RecentActivities';
type Props = {}

export const metadata = {
    title: "Dashboard | QuizzifyAI"
}
const Dashboard = async (props: Props) => {
    const session = await getAuthSession();
    if(!session?.user){
        return redirect("/");
    }
  return (
    <main className='pt-8 mx-auto max-w-7x1'>
    <div className="flex items-center"><h2 className='mr-2 text-3xl font-bold tracking-tight'>Dashboard</h2></div>
    <div className="grid gap-4 mt-4 md:grid-cols-2"><QuizCard />
    <HistoryCard /></div>
    {/* <QuizCard />
    <HistoryCard /> */}
    <div className="grid gap-4 mt-4 md:grid-cols-10 lg:grid-cols-10">
        <HotTopicsCard />
        <RecentActivities />
    </div>
    </main>
  )
}

export default Dashboard
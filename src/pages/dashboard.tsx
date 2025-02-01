import TaskItem from '@/components/shared/task-item'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BadgePlus } from 'lucide-react'

const Dashboard = () => {
	return (
		<div className='h-screen max-w-6xl mx-auto flex items-center'>
			<div className='grid grid-cols-2 w-full gap-8 items-start'>
				<div className='flex flex-col space-y-3'>
					<div className='w-full p-4 rounded-md flex justify-between bg-gradient-to-t from-background to-secondary'>
						<div className='text-2xl font-bold'>Trainings</div>
						<Button size={'icon'}>
							<BadgePlus />
						</Button>
					</div>
					<Separator />
					<div className='w-full p-4 rounded-md flex justify-between bg-gradient-to-b from-background to-secondary relative min-h-60'>
						<div className='flex flex-col space-y-3 w-full'>
							{Array.from({ length: 3 }).map((item, index) => (
								<TaskItem />
							))}
						</div>
					</div>
				</div>

				<div className='flex flex-col space-y-3 relative w-full'>
					<div className='p-4 rounded-md bg-gradient-to-r from-blue-900 to-background relative h-24'>
						<div className='text-2xl font-bold'>Total week</div>
						<div className='text-3xl font-bold'>02:07:01</div>
					</div>
					<div className='p-4 rounded-md bg-gradient-to-r from-secondary to-background relative h-24'>
						<div className='text-2xl font-bold'>Total year</div>
						<div className='text-3xl font-bold'>02:07:01</div>
					</div>
					<div className='p-4 rounded-md bg-gradient-to-r from-destructive to-background relative h-24'>
						<div className='text-2xl font-bold'>Total time</div>
						<div className='text-3xl font-bold'>02:07:01</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard

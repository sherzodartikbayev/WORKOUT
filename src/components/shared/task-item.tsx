import { Card } from '../ui/card'
import { MdOutlineTaskAlt } from 'react-icons/md'
import { HiStatusOnline } from 'react-icons/hi'
import { CiPlay1 } from 'react-icons/ci'
import { Button } from '../ui/button'
import { Edit2, Trash } from 'lucide-react'

const TaskItem = () => {
	return (
		<Card className='w-full p-4 shadow-md grid grid-cols-4 items-center relative'>
			<div className='flex gap-1 items-center col-span-2 w-full'>
				<MdOutlineTaskAlt className='text-blue-500' />
				<span className='capitalize'>Press</span>
			</div>
			<div className='flex gap-1 items-center'>
				<HiStatusOnline />
				<span className='capitalize text-sm'>Unstarted</span>
			</div>
			<div className='flex gap-1 items-center justify-self-end'>
				<Button variant={'ghost'} size={'icon'} className='w-8 h-8'>
					<CiPlay1 className='w-5 h-5 text-indigo-500' />
				</Button>
				<Button variant={'ghost'} size={'icon'} className='w-8 h-8'>
					<Edit2 className='w-5 h-5 text-indigo-500' />
				</Button>
				<Button variant={'destructive'} size={'icon'} className='w-8 h-8'>
					<Trash className='w-5 h-5 text-indigo-500' />
				</Button>
			</div>
		</Card>
	)
}

export default TaskItem

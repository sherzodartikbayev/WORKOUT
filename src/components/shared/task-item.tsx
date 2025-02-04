import { Card } from '../ui/card'
import { MdOutlineTaskAlt } from 'react-icons/md'
import { HiStatusOnline } from 'react-icons/hi'
import { CiPause1, CiPlay1 } from 'react-icons/ci'
import { Button } from '../ui/button'
import { Edit2, Trash } from 'lucide-react'
import { ITask, ITaskData } from '@/types'
import { RxReload } from 'react-icons/rx'
import { useState } from 'react'
import { toast } from 'sonner'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import FillLoading from './fill-loading'
import { QueryObserverResult } from '@tanstack/react-query'
import { cn } from '@/lib/utils'

interface Props {
	task: ITask
	onStartEditing: () => void
	onDelete: () => void
	refetch: () => Promise<QueryObserverResult<ITaskData, Error>>
}

const TaskItem = ({ task, onStartEditing, onDelete, refetch }: Props) => {
	const [isLoading, setIsLoading] = useState(false)

	const onStart = async () => {
		setIsLoading(true)
		const ref = doc(db, 'tasks', task.id)
		try {
			await updateDoc(ref, {
				status: 'in_progress',
				startTime: Date.now(),
			})
			refetch()
		} catch (error) {
			toast.error('An error occured')
		} finally {
			setIsLoading(false)
		}
	}

	const onPause = async () => {
		setIsLoading(true)
		const ref = doc(db, 'tasks', task.id)
		try {
			const elapsed = task.startTime ? Date.now() - task.startTime : 0
			const newTotalTime = (task.totalTime || 0) + elapsed
			await updateDoc(ref, {
				status: 'paused',
				endTime: Date.now(),
				totalTime: newTotalTime,
			})
			refetch()
		} catch (error) {
			toast.error('An error occured')
		} finally {
			setIsLoading(false)
		}
	}

	const renderBtns = () => {
		switch (task.status) {
			case 'unstarted':
				return (
					<Button
						variant={'ghost'}
						size={'icon'}
						className='w-8 h-8'
						onClick={onStart}
					>
						<CiPlay1 className='w-5 h-5 text-indigo-500' />
					</Button>
				)
			case 'in_progress':
				return (
					<Button
						variant={'ghost'}
						size={'icon'}
						className='w-8 h-8'
						onClick={onPause}
					>
						<CiPause1 className='w-5 h-5 text-indigo-500' />
					</Button>
				)
			case 'paused':
				return (
					<Button variant={'ghost'} size={'icon'} className='w-8 h-8'>
						<RxReload className='w-5 h-5 text-indigo-500' />
					</Button>
				)
		}
	}

	return (
		<Card className='w-full p-4 shadow-md grid grid-cols-4 items-center relative'>
			{isLoading && <FillLoading />}
			<div className='flex gap-1 items-center col-span-2 w-full'>
				<MdOutlineTaskAlt className='text-blue-500' />
				<span className='capitalize'>{task.title}</span>
			</div>
			<div className='flex gap-1 items-center'>
				<HiStatusOnline
					className={cn(
						task.status === 'unstarted' && 'text-blue-500',
						task.status === 'in_progress' && 'text-green-500',
						task.status === 'paused' && 'text-red-500'
					)}
				/>
				<span className='capitalize text-sm'>{task.status}</span>
			</div>
			<div className='flex gap-1 items-center justify-self-end'>
				{renderBtns()}
				<Button
					variant={'ghost'}
					size={'icon'}
					className='w-8 h-8'
					onClick={onStartEditing}
				>
					<Edit2 className='w-5 h-5 text-indigo-500' />
				</Button>
				<Button
					variant={'destructive'}
					size={'icon'}
					className='w-8 h-8'
					onClick={onDelete}
				>
					<Trash className='w-5 h-5 text-indigo-500' />
				</Button>
			</div>
		</Card>
	)
}

export default TaskItem

import { Button } from '@/components/ui/button'
import { featuredItems, programs } from '@/constants'
import men from '@/assets/men.png'
import { Card } from '@/components/ui/card'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { useUserState } from '@/store/user.store'
import { CgGym } from 'react-icons/cg'
import { LogOut } from 'lucide-react'
import { auth } from '@/firebase'

const Home = () => {
	const { user, setUser } = useUserState()

	const navigate = useNavigate()

	const onLogout = () => {
		auth.signOut().then(() => {
			setUser(null)
			navigate('/auth')
		})
	}

	return (
		<>
			<div className='w-full h-screen flex items-center flex-wrap lg:mt-20'>
				<div className='max-w-xl lg:ml-60 flex h-full flex-col flex-wrap justify-center max-md:mx-16 max-md:text-center'>
					<h1 className='lg:text-9xl font-semibold uppercase max-md:text-4xl mb-3'>
						Workout with me
					</h1>
					<p className='text-muted-foreground'>
						A huge selection of health and fitness content, healthy repices and
						transformation stories to help you get find and stay fit!
					</p>
					{user ? (
						<div className='flex gap-4'>
							<Link to='/dashboard'>
								<Button className='w-fit mt-6 font-bold h-12' size={'lg'}>
									<span>Go to GYM</span>
									<CgGym className='h-5 w-5 ml-2' />
								</Button>
							</Link>
							<Button
								className='w-fit mt-6 font-bold h-12'
								variant={'destructive'}
								size={'lg'}
								onClick={onLogout}
							>
								<span>Logout</span>
								<LogOut className='h-5 w-5 ml-2' />
							</Button>
						</div>
					) : (
						<Link to='/auth'>
							<Button className='w-fit mt-6 font-bold h-12' size={'lg'}>
								Join club now
							</Button>
						</Link>
					)}

					<div className='mt-24'>
						<p className='text-muted-foreground'>AS FUATURED IN</p>
						<div className='flex items-center flex-wrap gap-4 mt-2 max-md:justify-center'>
							{featuredItems.map((Icon, index) => (
								<Icon key={index} className='w-12 h-12' />
							))}
						</div>
					</div>
				</div>

				<img src={men} alt='men' className='w-1/4 max-md:hidden' />
			</div>

			<div className='container max-w-5xl mx-auto max-md:px-6'>
				<h1 className='text-4xl'>Not sure where to start?</h1>
				<p className='mt-2 text-muted-foreground'>
					Programs offer day-today guidance on an interactive calendar to keep
					you on track.
				</p>

				<div className='grid lg:grid-cols-3 max-md:grid-cols-1 gap-4 my-8'>
					{programs.map(item => (
						<Card
							key={item.title}
							className='p-8 relative cursor-pointer group'
						>
							<h3>{item.title}</h3>
							<p className='text-sm text-muted-foreground mt-2'>{item.descr}</p>

							<Button
								size={'icon'}
								variant='ghost'
								className='absolute right-2 top-1/2 group-hover:translate-x-1 transition-all'
							>
								<FaArrowRightLong />
							</Button>
						</Card>
					))}
				</div>
			</div>
		</>
	)
}

export default Home

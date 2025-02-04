import { navLinks } from '@/constants'
import { Button } from '../ui/button'
import { ModeToggle } from './mode-toggle'
import { Link } from 'react-router-dom'
import { useUserState } from '@/store/user.store'
import UserBox from './user-box'

const Navbar = () => {
	const { user } = useUserState()

	return (
		<div className='w-full h-[10vh] border-b fixed inset-0 z-50 bg-background max-md:px-6 px-10 max-md:py-5'>
			<div className='container max-w-6xl mx-auto h-full flex justify-between items-center'>
				<Link to='/'>
					<h1 className='text-2xl max-sm:text-xl font-bold uppercase cursor-pointer'>
						workout
					</h1>
				</Link>

				<div className='flex items-center gap-3'>
					{navLinks.map(nav => (
						<a
							href={nav.path}
							key={nav.path}
							className='font-medium hover:underline max-md:hidden'
						>
							{nav.label}
						</a>
					))}
					<ModeToggle />
					{user ? (
						<>
							<UserBox />
						</>
					) : (
						<Link to='/auth'>
							<Button variant={'secondary'}>Join Free</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar

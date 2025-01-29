import { useAuthState } from '@/store/auth.store'
import { Separator } from '../ui/separator'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Register = () => {
	const { setAuth } = useAuthState()

	return (
		<div className='flex flex-col'>
			<h2 className='text-xl font-bold'>Register</h2>
			<p className='text-muted-foreground'>
				Already have an account?{' '}
				<span
					className='text-blue-500 cursor-pointer hover:underline'
					onClick={() => setAuth('login')}
				>
					Sign in
				</span>
			</p>
			<Separator className='my-3' />
			<div className=''>
				<span>Email</span>
				<Input placeholder='example@gmail.com' />
			</div>
			<div className='grid grid-cols-2 gap-4 mt-2'>
				<div>
					<span>Password</span>
					<Input placeholder='******' type='password' />
				</div>
				<div>
					<span>Confirm Password</span>
					<Input placeholder='******' type='password' />
				</div>
			</div>
			<Button className='w-full h-12 mt-4'>Register</Button>
		</div>
	)
}

export default Register

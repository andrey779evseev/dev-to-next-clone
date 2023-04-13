'use client'

import Checkbox from '@/components/common/Checkbox'
import { useState } from 'react'

export default function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [remember, setRemember] = useState(false)

	return (
		<>
			<div className='mb-3'>
				<p className='mb-2 font-medium'>Email</p>
				<input
					type='email'
					autoComplete='email'
					className='input'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className='mb-3'>
				<p className='mb-2 font-medium'>Password</p>
				<input
					type='password'
					autoComplete='current-password'
					className='input'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<Checkbox value={remember} setValue={setRemember} />
		</>
	)
}

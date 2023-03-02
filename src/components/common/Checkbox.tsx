'use client'
import clsx from 'clsx'
import { useState } from 'react'

type PropsType = {
  value: boolean
  setValue: (value: boolean) => void
}

export default function Checkbox (props: PropsType) {
  const {value, setValue} = props
	
	return (
		<div
			className='inline-flex cursor-pointer select-none items-center gap-2 rounded-md px-1 transition-all hover:bg-gray-100 hover:shadow-[0_0_0_4px_] hover:shadow-gray-100'
			onClick={() => setValue(!value)}
		>
			<div
				className={clsx(
					'relative h-[18px] w-[18px] rounded-md border-1.5 border-gray-300 transition-all',
					{ '!border-blue': value }
				)}
			>
				<div
					className={clsx(
						'invisible absolute top-0 left-0 flex h-full w-full items-center justify-center bg-blue opacity-0 transition-all',
						{ '!visible !opacity-100': value }
					)}
				>
					<svg
						width='12'
						height='10'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M11.157.933a.75.75 0 01.077 1.058L4.817 9.407a.75.75 0 01-1.134 0L.766 6.037a.75.75 0 011.135-.982L4.25 7.77l5.85-6.76a.75.75 0 011.057-.077z'
							fill='#fff'
						/>
					</svg>
				</div>
			</div>
			<span>Remember me</span>
		</div>
	)
}

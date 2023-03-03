import clsx from 'clsx'
import Link from 'next/link'

type PropsType = {
  full?: boolean
}

export default function LoginButton(props: PropsType) {
  const {full = false} = props
	return (
		<Link
			href='/login'
			className={clsx(
        'border-none px-4 py-2 outline-none link text-center',
        {'w-full': full}
      )}
		>
			<span className='whitespace-nowrap'>
				Log in
			</span>
		</Link>
	)
}

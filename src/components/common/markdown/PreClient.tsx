'use client'

import { highlight, Token } from '@code-hike/lighter'
import { PropsWithChildren, useEffect, useState } from 'react'
import Pre from '@/components/common/markdown/Pre'
import Spinner from '@/components/common/Spinner'

export default function PreClient(props: PropsWithChildren) {
	console.log(props)
	//@ts-ignore
	const code = props.children[0].props.children[0].trim()
	const [lines, setLines] = useState<Token[][]>([])
	useEffect(() => {
		;(async () => {
			const res = await highlight(code, 'ts', 'one-dark-pro')
			setLines(res.lines)
		})()
	}, [code])

	if (lines.length === 0)
		return (
			<div className='mb-5 flex h-fit w-full justify-center rounded-md bg-syntax-background p-6'>
				<Spinner />
			</div>
		)

	return <Pre lines={lines} />
}

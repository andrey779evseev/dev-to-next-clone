import { highlight } from '@code-hike/lighter'
import { FC, PropsWithChildren } from 'react'
import Pre from '@/components/common/markdown/Pre'

async function _PreServer(props: PropsWithChildren) {
	//@ts-ignore
	const code = props.children.props.children.trim()
	const { lines } = await highlight(code, 'ts', 'one-dark-pro')

	return <Pre lines={lines} />
}

const PreServer = _PreServer as unknown as FC

export default PreServer

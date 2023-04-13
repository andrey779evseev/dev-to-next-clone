import { PropsWithChildren } from 'react'

type PropsType = PropsWithChildren<{
	condition: boolean
}>

export default function If(props: PropsType) {
	const { children, condition } = props
	return <>{condition && children}</>
}

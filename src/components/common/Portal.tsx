'use client'

import {
	memo,
	PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { createPortal } from 'react-dom'

type PropsType = {
	id: string
}

const Portal = (props: PropsWithChildren<PropsType>) => {
	const { id, children } = props
	const [element, setElement] = useState<HTMLDivElement | null>(null)

	const createWrapperAndAppendToBody = useCallback(() => {
		const wrapperElement = document.createElement('div')
		wrapperElement.setAttribute('id', id)
		document.body.appendChild(wrapperElement)
		return wrapperElement
	}, [id])

	useEffect(() => {
		let el = document.getElementById(id) as HTMLDivElement
		if (!el) el = createWrapperAndAppendToBody()
		setElement(el)
	}, [createWrapperAndAppendToBody, element, id])

	if (!element) return <></>

	return createPortal(children, element)
}

export default memo(Portal)

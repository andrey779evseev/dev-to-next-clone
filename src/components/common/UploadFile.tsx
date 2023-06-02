'use client'

import React, { memo, PropsWithChildren, useRef } from 'react'

type PropsType = PropsWithChildren<{
	onUpload: (file: File) => void
}>

const UploadFile = (props: PropsType) => {
	const { children, onUpload } = props
	const inputRef = useRef<HTMLInputElement>(null)
	return (
		<>
			<div onClick={() => inputRef.current!.click()} className='cursor-pointer'>
				{children}
			</div>
			<input
				className='hidden'
				id='file-upload'
				type='file'
				accept='image/*'
				onChange={(e) => onUpload(e.target.files![0])}
				ref={inputRef}
			/>
		</>
	)
}

export default memo(UploadFile)

'use client'

import { memo, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import Spinner from '@/components/common/Spinner'
import Tooltip from '@/components/common/Tooltip'
import UploadFile from '@/components/common/UploadFile'

type PropsType = {
	setFile: (file: File) => void
}

const CreatePostFormUploadImage = (props: PropsType) => {
	const { setFile } = props
	const [isImageLoading, setIsImageLoading] = useState(false)
	const [image, setImage] = useState<string | null>(null)

	const onUpload = (file: File) => {
		setIsImageLoading(true)
		setFile(file)
		setImage(URL.createObjectURL(file))
		setIsImageLoading(false)
	}

	return (
		<>
			{isImageLoading ? (
				<div className='flex items-center gap-2 py-2 pl-1'>
					<Spinner color='blue' size='small' />
					<span className='text-base text-dark'>Uploading...</span>
				</div>
			) : image === null ? (
				<UploadFile onUpload={onUpload}>
					<Tooltip text='Use_a ratio_of 100:42 for_best results.'>
						<Button size='medium' type='secondary-outlined' width='fit'>
							Add a cover image
						</Button>
					</Tooltip>
				</UploadFile>
			) : (
				<div className='flex items-center gap-4'>
					<Image
						src={image}
						alt='post-picture'
						width={250}
						height={105}
						className='h-[105px] w-[250px] rounded-md object-scale-down'
					/>
					<UploadFile onUpload={onUpload}>
						<Tooltip text='Use_a ratio_of 100:42 for_best results.'>
							<Button size='medium' type='secondary-outlined' width='fit'>
								Change
							</Button>
						</Tooltip>
					</UploadFile>
					<button
						className='rounded-md px-4 py-2 text-center text-base font-medium text-danger transition-colors hover:bg-black/5'
						onClick={() => setImage(null)}
					>
						Remove
					</button>
				</div>
			)}
		</>
	)
}

export default memo(CreatePostFormUploadImage)

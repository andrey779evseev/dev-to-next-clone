'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/Button'
import CloseIcon from '@/components/common/icons/CloseIcon'
import Modal from '@/components/common/Modal'
import CreatePostBasicsTutorial from '@/components/create-post/CreatePostBasicsTutorial'
import CreatePostFooter from '@/components/create-post/CreatePostFooter'
import CreatePostForm from '@/components/create-post/CreatePostForm'
import CreatePostHeader from '@/components/create-post/CreatePostHeader'
import CreatePostPreview from '@/components/create-post/CreatePostPreview'
import CreatePostTagsTutorial from '@/components/create-post/CreatePostTagsTutorial'
import CreatePostTitleTutorial from '@/components/create-post/CreatePostTitleTutorial'

type Tutorial = 'title' | 'tags' | 'basics'

export default function NewPage() {
	const [text, setText] = useState('')
	const [title, setTitle] = useState('')
	const [tutorial, setTutorial] = useState<Tutorial>('title')
	const [file, setFile] = useState<File | null>(null)
	const [tags, setTags] = useState<string[]>([])
	const [isPreview, setIsPreview] = useState(false)
	const [isCloseModal, setIsCloseModal] = useState(false)
	const titleRef = useRef<HTMLTextAreaElement>(null)
	const router = useRouter()

	useEffect(() => {
		if (titleRef.current !== null) titleRef.current.focus()
	}, [titleRef])

	const currentTutorial = useMemo(() => {
		switch (tutorial) {
			case 'title':
				return {
					text: <CreatePostTitleTutorial />,
					top: 92,
				}
			case 'tags':
				return {
					text: <CreatePostTagsTutorial />,
					top: 166,
				}
			case 'basics':
				return {
					text: <CreatePostBasicsTutorial />,
					top: 196,
				}
		}
	}, [tutorial])

	return (
		<main className='mx-auto flex h-full min-h-screen w-full max-w-[1280px] gap-4 bg-gray-100 px-4'>
			<div className='flex h-14 w-16 items-center'>
				<Link href='/'>
					<Image
						src='/logo.svg'
						alt='logo'
						width={50}
						height={40}
						className='mr-4'
						priority
					/>
				</Link>
			</div>
			<div className='flex h-full flex-1 flex-col'>
				<CreatePostHeader isPreview={isPreview} setIsPreview={setIsPreview} />
				<div className='card-white relative flex h-[calc(100vh-144px)] w-full flex-col !overflow-y-auto bg-blue'>
					{isPreview ? (
						<CreatePostPreview title={title} tags={tags} text={text} />
					) : (
						<CreatePostForm
							setFile={setFile}
							setTags={setTags}
							setText={setText}
							setTitle={setTitle}
							setTutorial={setTutorial}
							tags={tags}
							text={text}
							title={title}
							titleRef={titleRef}
						/>
					)}
				</div>
				<CreatePostFooter
					setText={setText}
					setTitle={setTitle}
					setTags={setTags}
					text={text}
				/>
			</div>
			<div className='flex h-full min-h-screen w-[30%] flex-col'>
				<button
					className='ghost-blue-btn fixed right-2 top-2 p-2'
					onClick={() => setIsCloseModal(true)}
				>
					<CloseIcon />
				</button>
				<div
					className='sticky w-full py-14 text-base font-light text-base-70 transition-all'
					style={{ top: `${currentTutorial.top}px` }}
				>
					{currentTutorial.text}
				</div>
			</div>
			<Modal
				visible={isCloseModal}
				onClose={() => setIsCloseModal(false)}
				title='You have unsaved changes'
			>
				<p className='text-base text-dark'>
					You&apos;ve made changes to your post. Do you want to navigate to
					leave this page?
				</p>
				<div className='mt-4 flex gap-2'>
					<Button
						size='big'
						type='danger'
						width='fit'
						onClick={() => router.push('/')}
					>
						Yes, leave the page
					</Button>
					<Button
						size='big'
						type='secondary'
						width='fit'
						onClick={() => setIsCloseModal(false)}
					>
						No, keep editing
					</Button>
				</div>
			</Modal>
		</main>
	)
}

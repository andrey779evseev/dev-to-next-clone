'use client'

import { RefObject, useState } from 'react'
import AutoCompleteInput from '@/components/common/auto-complete/AutoCompleteInput'
import MarkdownInputActions from '@/components/common/markdown/MarkdownInputActions'
import CreatePostFormUploadImage from '@/components/create-post/CreatePostFormUploadImage'
import { cn } from '@/utils/cn'
import { useMarkdownActions } from '@/hooks/useMarkdownActions'

type PropsType = {
	title: string
	setTitle: (value: string) => void
	text: string
	setText: (value: string) => void
	setFile: (file: File) => void
	setTutorial: (value: 'basics' | 'title' | 'tags') => void
	tags: string[]
	setTags: (value: string[]) => void
	titleRef: RefObject<HTMLTextAreaElement>
}

const tagItems = [
	{
		description: 'The magic behind computers 👨‍💻',
		title: 'programming',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '1',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '2',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '3',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '4',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '5',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '6',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '7',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '8',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '9',
	},
	{
		description: 'The magic behind computers 👨‍💻',
		title: '10',
	},
]

export default function CreatePostForm(props: PropsType) {
	const {
		title,
		setTitle,
		text,
		setText,
		setFile,
		setTags,
		setTutorial,
		tags,
		titleRef,
	} = props
	const [textareaHeight, setTextareaHeight] = useState(0)
	const [ref, onAction] = useMarkdownActions(text, setText)

	const textAreaAdjust = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		setTextareaHeight((e.target as HTMLTextAreaElement).scrollHeight)
	}

	return (
		<>
			<div className='px-16 pt-8'>
				<CreatePostFormUploadImage setFile={setFile} />
				<textarea
					className='mb-2 mt-5 max-h-[60px] min-h-[60px] w-full resize-none text-5xl font-extrabold text-dark outline-none placeholder:text-gray-600'
					placeholder='New post title here...'
					ref={titleRef}
					onFocus={() => setTutorial('title')}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<AutoCompleteInput
					placeholder={
						tags.length === 0 ? 'Add up to 4 tags...' : 'Add another...'
					}
					items={tagItems}
					title='Top tags'
					className='mb-8'
					values={tags}
					max={4}
					onChange={setTags}
					onFocus={() => setTutorial('tags')}
				/>
			</div>
			<div className='sticky top-0 mb-6 flex w-full items-center justify-between bg-base-0 px-16 py-2'>
				<MarkdownInputActions onAction={onAction} />
			</div>
			<textarea
				ref={ref}
				value={text}
				onChange={(e) => setText(e.target.value)}
				className={cn(
					'resize-none overflow-hidden px-16 pb-8 font-monospace text-lg font-light text-dark outline-none placeholder:text-base-70',
					{ 'flex-1': textareaHeight === 0 }
				)}
				placeholder='Write your post content here...'
				onFocus={() => setTutorial('basics')}
				onKeyDown={textAreaAdjust}
				style={{
					minHeight: textareaHeight !== 0 ? `${textareaHeight}px` : undefined,
				}}
			/>
		</>
	)
}

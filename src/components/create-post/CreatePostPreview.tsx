'use client'

import { MarkdownClient } from '@/components/common/markdown/Markdown'
import Tags from '@/components/common/tag/Tags'

type PropsType = {
	title: string
	tags: string[]
	text: string
}

export default function CreatePostPreview(props: PropsType) {
	const { title, tags, text } = props
	return (
		<article>
			<header className='px-16 pt-8'>
				<h1 className='mb-2 text-5xl font-extrabold text-dark'>{title}</h1>
				<Tags tags={tags} size='big' isGray />
			</header>
			<div className='px-16 py-8 text-xl'>
				<MarkdownClient text={text} />
			</div>
		</article>
	)
}

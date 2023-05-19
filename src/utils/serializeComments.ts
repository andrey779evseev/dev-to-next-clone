import { Comment } from '@/types/Comment'
import { ReactElement } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'
import { serverMdxComponents } from '@/components/common/markdown/Markdown'

export type SerializedComment = {
	id: number
	content: ReactElement
}

export async function serializeComments(comments: Comment[] | undefined) {
	const result: SerializedComment[] = []
	if (comments === undefined) return []
	for (const comment of comments) {
		const compiled = await compileMDX({
			source: comment.text,
			components: serverMdxComponents,
		})
		result.push({
			id: comment.id,
			content: compiled.content,
		})
		const replies = await serializeComments(comment.replies)
		result.push(...replies)
	}
	return result
}

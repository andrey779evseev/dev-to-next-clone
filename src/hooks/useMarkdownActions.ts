import { RefObject, useCallback, useRef } from 'react'

export type MarkdownActionTypes =
	| 'bold'
	| 'italic'
	| 'link'
	| 'ordered-list'
	| 'unordered-list'
	| 'heading'
	| 'quote'
	| 'divider'
	| 'strike'
	| 'underline'
	| 'code-block'
	| 'code'

export type MarkdownActions = (type: MarkdownActionTypes) => void

export function useMarkdownActions(
	text: string,
	setText: (value: string) => void
): [RefObject<HTMLTextAreaElement>, MarkdownActions] {
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	return [
		textareaRef,
		useCallback(
			(type: MarkdownActionTypes) => {
				//content
				const start = textareaRef.current!.selectionStart
				const end = textareaRef.current!.selectionEnd
				const content = text.slice(start, end)

				//marker
				let markerStart = ''
				let markerEnd = ''
				let markerStartLength = 0
				let markerEndLength = 0
				const extra = start !== 0 ? 1 : 0
				switch (type) {
					case 'bold':
						markerStart = markerEnd = '**'
						markerStartLength = markerEndLength = 2
						break
					case 'italic':
						markerStart = markerEnd = '_'
						markerStartLength = markerEndLength = 1
						break
					case 'link':
						markerStart = '['
						markerEnd = '](url)'
						markerStartLength = content.length + 3
						markerEndLength = 6
						break
					case 'ordered-list':
						markerStart = `${start !== 0 ? '\n' : ''}1. `
						if (content.length > 0) {
							markerStartLength = 0 + extra
							markerEndLength = 3 + extra
						} else {
							markerStartLength = markerEndLength = 3 + extra
						}
						break
					case 'unordered-list':
						markerStart = `${start !== 0 ? '\n' : ''}- `
						if (content.length > 0) {
							markerStartLength = 0 + extra
							markerEndLength = 2 + extra
						} else {
							markerStartLength = markerEndLength = 2 + extra
						}
						break
					case 'heading':
						markerStart = `${start !== 0 ? '\n' : ''}## `
						markerStartLength = markerEndLength = 3 + extra
						break
					case 'quote':
						markerStart = `${start !== 0 ? '\n' : ''}> `
						if (content.length > 0) {
							markerStartLength = 0 + extra
							markerEndLength = 2 + extra
						} else {
							markerStartLength = markerEndLength = 2 + extra
						}
						break
					case 'divider':
						markerStart = `${start !== 0 ? '\n' : ''}---\n`
						markerStartLength = markerEndLength = 4 + extra
						break
					case 'strike':
						markerStart = markerEnd = '~~'
						markerStartLength = markerEndLength = 2
						break
					case 'underline':
						markerStart = markerEnd = '++'
						markerStartLength = markerEndLength = 2
						break
					case 'code-block':
						markerStart = `${start !== 0 ? '\n' : ''}\`\`\`\n`
						markerEnd = '\n```'
						markerStartLength = markerEndLength = 4 + extra
						break
					case 'code':
						markerStart = markerEnd = '`'
						markerStartLength = markerEndLength = 1
						break
				}

				//concat
				const result =
					text.slice(0, start) +
					markerStart +
					content +
					markerEnd +
					text.slice(end)

				//saving
				setText(result)

				//focus and selection
				setTimeout(() => {
					textareaRef.current!.setSelectionRange(
						start + markerStartLength,
						end + markerEndLength
					)
					textareaRef.current!.focus()
				}, 0)
			},
			[text, textareaRef, setText]
		),
	]
}

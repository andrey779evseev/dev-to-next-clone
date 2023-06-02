import { useCallback } from 'react'
import { MarkdownActions } from '@/hooks/useMarkdownActions'

export function useMarkdownShortcuts(onAction: MarkdownActions) {
	return useCallback(
		(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
			if (e.metaKey) {
				switch (e.key) {
					case 'b':
						onAction('bold')
						break
					case 'i':
						onAction('italic')
						break
					case 'k':
						onAction('link')
						break
					case 'x':
						if (e.shiftKey) onAction('strike')
						break
					case 'u':
						onAction('underline')
						break
				}
			}
		},
		[onAction]
	)
}

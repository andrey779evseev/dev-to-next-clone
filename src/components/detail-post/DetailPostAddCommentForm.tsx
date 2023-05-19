'use client'

import { ShortUser } from '@/types/ShortUser'
import { memo, useCallback, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import BoldIcon from '@/components/common/icons/editor/BoldIcon'
import BookIcon from '@/components/common/icons/editor/BookIcon'
import CodeBlockIcon from '@/components/common/icons/editor/CodeBlockIcon'
import CodeIcon from '@/components/common/icons/editor/CodeIcon'
import HeadingIcon from '@/components/common/icons/editor/HeadingIcon'
import HelpIcon from '@/components/common/icons/editor/HelpIcon'
import HyperlinkIcon from '@/components/common/icons/editor/HyperlinkIcon'
import ItalicIcon from '@/components/common/icons/editor/ItalicIcon'
import LightningIcon from '@/components/common/icons/editor/LightningIcon'
import LineDividerIcon from '@/components/common/icons/editor/LineDividerIcon'
import OrderedListIcon from '@/components/common/icons/editor/OrderedListIcon'
import PictureIcon from '@/components/common/icons/editor/PictureIcon'
import QuoteIcon from '@/components/common/icons/editor/QuoteIcon'
import StrikethroughIcon from '@/components/common/icons/editor/StrikethroughIcon'
import UnderlineIcon from '@/components/common/icons/editor/UnderlineIcon'
import UnorderedListIcon from '@/components/common/icons/editor/UnorderedListIcon'
import MoreIcon from '@/components/common/icons/MoreIcon'
import If from '@/components/common/If'
import { MarkdownClient } from '@/components/common/markdown/Markdown'
import Popover from '@/components/common/Popover'
import Tooltip from '@/components/common/Tooltip'
import { cn } from '@/utils/cn'

type PropsType = {
	user: ShortUser
	reply?: boolean
	onDismiss?: () => void
}

const DetailPostAddCommentForm = (props: PropsType) => {
	const { user, onDismiss, reply = false } = props
	const [isEditor, setIsEditor] = useState(reply)
	const [isFocused, setIsFocused] = useState(false)
	const [isPreview, setIsPreview] = useState(false)
	const [text, setText] = useState('')
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const onAction = useCallback(
		(
			type:
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
		) => {
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
		[text]
	)

	const actions = useMemo(
		() => [
			{
				tooltip: 'Bold',
				shortcut: 'CMD +_B',
				icon: <BoldIcon />,
				fn: () => onAction('bold'),
			},
			{
				tooltip: 'Italic',
				shortcut: 'CMD +_I',
				icon: <ItalicIcon />,
				fn: () => onAction('italic'),
			},
			{
				tooltip: 'Link',
				shortcut: 'CMD +_K',
				icon: <HyperlinkIcon />,
				fn: () => onAction('link'),
			},
			{
				tooltip: 'Ordered list',
				icon: <OrderedListIcon />,
				fn: () => onAction('ordered-list'),
			},
			{
				tooltip: 'Unordered list',
				icon: <UnorderedListIcon />,
				fn: () => onAction('unordered-list'),
			},
			{
				tooltip: 'Heading',
				icon: <HeadingIcon />,
				fn: () => onAction('heading'),
			},
			{
				tooltip: 'Quote',
				icon: <QuoteIcon />,
				fn: () => onAction('quote'),
			},
			{
				tooltip: 'Upload image',
				icon: <PictureIcon />,
			},
		],
		[onAction]
	)

	const secondaryActions = useMemo(
		() => [
			{
				tooltip: 'Code',
				icon: <CodeIcon />,
				fn: () => onAction('code'),
			},
			{
				tooltip: 'Code block',
				icon: <CodeBlockIcon />,
				fn: () => onAction('code-block'),
			},
			{
				tooltip: 'Embed',
				shortcut: 'CMD_+ SHIFT +_K',
				icon: <LightningIcon />,
			},
			{
				tooltip: 'Underline',
				shortcut: 'CMD_+_U',
				icon: <UnderlineIcon />,
				fn: () => onAction('underline'),
			},
			{
				tooltip: 'Strikethrough',
				shortcut: 'CMD_+_SHIFT +_X',
				icon: <StrikethroughIcon />,
				fn: () => onAction('strike'),
			},
			{
				tooltip: 'Line divider',
				icon: <LineDividerIcon />,
				fn: () => onAction('divider'),
			},
			{
				tooltip: 'FAQ',
				icon: <BookIcon />,
			},
			{
				tooltip: 'Help',
				icon: <HelpIcon />,
			},
		],
		[onAction]
	)

	const openEditor = () => {
		setIsEditor(true)
		setTimeout(() => textareaRef.current!.focus(), 1)
	}

	const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
	}

	return (
		<form>
			<div className='flex items-start gap-2'>
				<div className={cn(reply ? 'w-6 min-w-[24px]' : 'w-8 min-w-[32px]')}>
					<If condition={!reply}>
						<Image
							src={user.photo}
							width={32}
							height={32}
							alt='user-photo'
							className='rounded-full'
						/>
					</If>
				</div>
				{isEditor ? (
					<div className='mb-4 w-full'>
						<div
							className={cn(
								'mb-3 w-full rounded-md ring-1 ring-gray-300 transition-all',
								{ 'ring-2 ring-blue': isFocused }
							)}
						>
							{isPreview ? (
								<MarkdownClient
									className='h-fit w-full overflow-y-auto p-4 pb-0 text-lg'
									text={text}
								/>
							) : (
								<>
									<textarea
										name='comment'
										id='comment'
										className={cn(
											'w-full resize-none rounded-md p-2 text-base text-dark outline-none placeholder:text-gray-600',
											reply ? 'h-32' : 'h-[40vh]'
										)}
										placeholder={reply ? 'Reply...' : 'Add to the discussion'}
										onFocus={() => setIsFocused(true)}
										onBlur={() => setIsFocused(false)}
										ref={textareaRef}
										value={text}
										onChange={(e) => setText(e.target.value)}
										onKeyDown={onKeyDown}
									/>
									<div className='flex h-10 w-full justify-between border-t border-gray-300'>
										<div className='flex'>
											{actions.map((action) => (
												<Tooltip
													text={action.tooltip}
													key={action.tooltip}
													shortcut={action.shortcut}
												>
													<button
														type='button'
														className='link mr-1 p-2'
														onClick={action.fn}
													>
														{action.icon}
													</button>
												</Tooltip>
											))}
										</div>
										<Popover
											content={
												<div className='flex rounded-md bg-white p-2 text-dark shadow-1'>
													{secondaryActions.map((action) => (
														<Tooltip
															text={action.tooltip}
															key={action.tooltip}
															shortcut={action.shortcut}
														>
															{/* hot fix, this is not a button tag, because tooltip doesn't work correctly with button tag, it auto opens tooltip for first action on opening popover*/}
															<div
																role='button'
																className='link mr-1 p-2'
																onClick={action.fn}
															>
																{action.icon}
															</div>
														</Tooltip>
													))}
												</div>
											}
											trigger={
												<button className='link p-2'>
													<MoreIcon orientation='vertical' />
												</button>
											}
											sideOffset={4}
											align='end'
											alignOffset={-2}
										/>
									</div>
								</>
							)}
						</div>
						<div className='flex gap-2'>
							<Button size='big' type='primary' width='fit' role='submit'>
								Submit
							</Button>
							<Button
								size='big'
								type='secondary'
								width='fit'
								onClick={() => setIsPreview(!isPreview)}
							>
								{isPreview ? 'Continue editing' : 'Preview'}
							</Button>
							<button
								className='ghost-btn px-4 py-2'
								type='button'
								onClick={onDismiss}
							>
								Dismiss
							</button>
						</div>
					</div>
				) : (
					<textarea
						placeholder='Add to the discussion'
						name='comment'
						id='comment'
						className='max-h-[40vh] w-full resize-y rounded-md border border-gray-300 p-2 placeholder:text-gray-600'
						required
						onFocus={openEditor}
					/>
				)}
			</div>
		</form>
	)
}

export default memo(DetailPostAddCommentForm)

'use client'

import { ShortUser } from '@/types/ShortUser'
import { memo, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import If from '@/components/common/If'
import { MarkdownClient } from '@/components/common/markdown/Markdown'
import MarkdownInputActions from '@/components/common/markdown/MarkdownInputActions'
import { cn } from '@/utils/cn'
import { useMarkdownActions } from '@/hooks/useMarkdownActions'
import { useMarkdownShortcuts } from '@/hooks/useMarkdownShortcuts'

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

	const [ref, onAction] = useMarkdownActions(text, setText)
	const onKeyDown = useMarkdownShortcuts(onAction)

	const openEditor = () => {
		setIsEditor(true)
		setTimeout(() => ref.current!.focus(), 1)
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
										ref={ref}
										value={text}
										onChange={(e) => setText(e.target.value)}
										onKeyDown={onKeyDown}
									/>
									<div className='flex h-10 w-full justify-between border-t border-gray-300'>
										<MarkdownInputActions onAction={onAction} />
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
								className='ghost-gray-btn px-4 py-2'
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

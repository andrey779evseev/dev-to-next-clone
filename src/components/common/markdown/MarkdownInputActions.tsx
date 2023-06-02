'use client'

import { memo, useMemo } from 'react'
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
import Popover from '@/components/common/Popover'
import Tooltip from '@/components/common/Tooltip'
import { MarkdownActions } from '@/hooks/useMarkdownActions'

type PropsType = {
	onAction: MarkdownActions
}

const MarkdownInputActions = (props: PropsType) => {
	const { onAction } = props

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

	return (
		<>
			<div className='flex'>
				{actions.map((action) => (
					<Tooltip
						text={action.tooltip}
						key={action.tooltip}
						shortcut={action.shortcut}
					>
						<button
							type='button'
							className='ghost-blue-btn mr-1 p-2 hover:underline'
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
								{/* hot fix, this is not a button tag, because tooltip doesn't work correctly with button tag, it auto opens tooltip for first action on opening popover */}
								<div
									role='button'
									className='ghost-blue-btn mr-1 p-2 hover:underline'
									onClick={action.fn}
								>
									{action.icon}
								</div>
							</Tooltip>
						))}
					</div>
				}
				trigger={
					<button className='ghost-blue-btn p-2 hover:underline'>
						<MoreIcon orientation='vertical' />
					</button>
				}
				sideOffset={4}
				align='end'
				alignOffset={-2}
			/>
		</>
	)
}

export default memo(MarkdownInputActions)

'use client'

import Button from '@/components/common/Button'
import SettingsIcon from '@/components/common/icons/SettingsIcon'
import If from '@/components/common/If'
import Popover from '@/components/common/Popover'

type PropsType = {
	text: string
	setText: (value: string) => void
	setTags: (value: string[]) => void
	setTitle: (value: string) => void
}

export default function CreatePostFooter(props: PropsType) {
	const { text, setText, setTitle, setTags } = props

	const clear = () => {
		setText('')
		setTitle('')
		setTags([])
	}

	return (
		<div className='flex h-[88px] items-center gap-2'>
			<Button size='big' type='primary' width='fit'>
				Publish
			</Button>
			<button className='ghost-blue-btn px-4 py-2'>Save draft</button>
			<Popover
				trigger={
					<button className='ghost-blue-btn p-2'>
						<SettingsIcon />
					</button>
				}
				content={
					<div className='card-white w-max max-w-[360px] p-4'>
						<h3 className='mb-6 text-lg font-bold text-dark'>Post options</h3>
						<div className='text-base font-medium text-dark'>Canonical URL</div>
						<p className='text-sm text-gray-600'>
							Change meta tag{' '}
							<span className='rounded-md bg-black/10 px-1 py-px text-xs'>
								canonical_url
							</span>{' '}
							if this post was first published elsewhere (like your own blog).
						</p>
						<input
							type='text'
							className='input mb-6 mt-2'
							placeholder='https://your-site.com/post-title'
						/>
						<div className='text-base font-medium text-dark'>
							Schedule Publication
						</div>
						<input
							type='date'
							min={new Date().getDate()}
							className='input mt-2'
							placeholder='...'
						/>
						<input type='time' className='input mb-6 mt-2' placeholder='...' />
						<div className='text-base font-medium text-dark'>Series</div>
						<p className='text-sm text-gray-600'>
							Will this post be part of a series? Give the series a unique name.
							(Series visible once it has multiple posts)
						</p>
						<input type='text' className='input mb-6 mt-2' placeholder='...' />
						<Button size='big' type='primary-light' width='full'>
							Done
						</Button>
					</div>
				}
				side='top'
				sideOffset={4}
				align='start'
			/>
			<If condition={text.length !== 0}>
				<button className='ghost-blue-btn px-4 py-2 text-sm' onClick={clear}>
					Revert new changes
				</button>
			</If>
		</div>
	)
}

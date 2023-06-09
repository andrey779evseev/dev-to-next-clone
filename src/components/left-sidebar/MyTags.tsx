import Link from 'next/link'
import SettingsIcon from '@/components/common/icons/SettingsIcon'

const tags = [
	'#javascript',
	'#webdev',
	'#beginners',
	'#programming',
	'#tutorial',
	'#react',
	'#python',
	'#productivity',
	'#node',
	'#typescript',
	'#devops',
	'#aws',
	'#discuss',
	'#css',
	'#opensource',
	'#html',
	'#career',
	'#codenewbie',
	'#news',
	'#testing',
	'#github',
	'#android',
	'#security',
	'#java',
	'#database',
	'#cloud',
	'#api',
	'#docker',
	'#angular',
	'#datascience',
]

export default function MyTags() {
	return (
		<nav className='mb-6'>
			<header className='flex items-center justify-between pl-1'>
				<h2 className='p-2 font-bold text-base-90'>My tags</h2>
				<Link href='/dashboard/following_tags' className='ghost-blue-btn p-2'>
					<SettingsIcon />
				</Link>
			</header>
			<div className='max-h-[42vh] overflow-y-auto'>
				{tags.map((tag) => (
					<Link
						href={`/t/${tag.slice(1)}`}
						className='ghost-blue-btn block px-4 py-2 hover:underline'
						key={tag}
						prefetch={false}
					>
						{tag}
					</Link>
				))}
			</div>
		</nav>
	)
}

import Image from 'next/image'
import Link from 'next/link'
import Tags from '@/components/common/tag/Tags'
import SharedSidebar from '@/components/shared/SharedSidebar'

const article = {
	title: 'Isolate your Components in Tests: How to Mock your Dependencies',
	author: {
		name: 'Anthony Fung',
		photo:
			'https://res.cloudinary.com/practicaldev/image/fetch/s--W2au_EbE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1021330/b38e4565-4ef4-493b-8cb8-825b54793db6.jpg',
		nickname: 'ant_f_dev',
	},
	date: 'Jun 7',
	readTime: 4,
	tags: ['csharp', 'dotnet', 'testing', 'tutorial'],
	link: 'ant_f_dev/isolate-your-components-in-tests',
}

const articles: (typeof article)[] = new Array(10).fill(article)

const sidebarItems = [
	{
		name: 'All tags',
		link: 'readinglist',
	},
	...[...new Set(articles.map((x) => x.tags).flat())].map((tag) => {
		return {
			name: `#${tag}`,
			link: `readinglist/${tag}`,
		}
	}),
]

type PropsType = {
	isArchive?: boolean
}

export default function ReadingList(props: PropsType) {
	const { isArchive = false } = props

	return (
		<div className='grid-four mx-auto max-w-[1280px] p-4'>
			<h1 className='text-3xl font-bold text-base-100'>
				{isArchive ? 'Archive' : 'Reading list'} ({articles.length})
			</h1>
			<div className='ml-auto flex gap-2'>
				<Link
					href={isArchive ? '/readinglist' : '/readinglist/archive'}
					className='ghost-blue-btn whitespace-nowrap px-4 py-2 hover:underline'
				>
					View {isArchive ? 'reading list' : 'archive'}
				</Link>
				<input type='text' placeholder='Search...' className='input' />
			</div>
			<SharedSidebar items={sidebarItems} />
			<section className='card-white pb-4'>
				{articles.map((article, i) => (
					<article key={i} className='flex items-start px-6 pb-2 pt-6'>
						<Image
							src={article.author.photo}
							alt={`user-${article.author.nickname}-photo`}
							width={32}
							height={32}
							className='rounded-full'
						/>
						<div className='flex-1 pl-2'>
							<Link href={article.link} className='flex'>
								<h2 className='break-words text-lg font-bold leading-tight text-gray-700'>
									{article.title}
								</h2>
							</Link>
							<div className='flex h-7 items-center gap-1 text-sm'>
								<Link
									href={article.author.nickname}
									className='font-medium text-gray-700'
								>
									{article.author.name}
								</Link>
								<span className='text-base-30'> • </span>
								<span className='text-base-60'>{article.date}</span>
								<span className='text-base-30'> • </span>
								<span className='text-base-60'>
									{article.readTime} min read
								</span>
								<span className='text-base-30'> • </span>
								<Tags tags={article.tags} size='small' isGray />
							</div>
						</div>
						<button className='ghost-blue-btn px-4 py-2'>
							{isArchive ? 'Unarchive' : 'Archive'}
						</button>
					</article>
				))}
			</section>
		</div>
	)
}

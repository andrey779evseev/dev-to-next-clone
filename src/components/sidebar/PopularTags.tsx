
            

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

export default function PopularTags() {
	return (
		<nav className='mb-6'>
			<h2 className='p-2 font-bold text-base-90'>Popular tags</h2>
			<div className='max-h-[42vh] overflow-y-auto'>
				{tags.map((tag) => (
					<div className='link py-2 px-4' key={tag}>
						{tag}
					</div>
				))}
			</div>
		</nav>
	)
}

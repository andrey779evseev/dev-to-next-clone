export default function BasicsTutorial() {
	return (
		<>
			<h4 className='mb-2 text-lg font-medium text-dark'>Editor Basics</h4>
			<p>
				Use{' '}
				<a href='#markdown' className='text-blue'>
					Markdown
				</a>{' '}
				to write and format posts.
			</p>
			<details className='my-1'>
				<summary className='cursor-pointer text-sm'>
					Commonly used syntax
				</summary>
				<table className='card-white mb-4 mt-2 w-full text-sm text-gray-700 shadow-border shadow-dark/10'>
					<tbody>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>
								# Header <br />
								... <br />
								###### Header
							</td>
							<td className='p-2'>
								H1 Header <br />
								... <br />
								H6 Header
							</td>
						</tr>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>
								*italics* or <br />
								_italics_
							</td>
							<td className='p-2'>
								<em>italics</em>
							</td>
						</tr>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>**bold**</td>
							<td className='p-2'>
								<span className='font-bold'>bold</span>
							</td>
						</tr>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>[Link](https://...)</td>
							<td className='p-2'>
								<a
									href='https://google.com'
									target='_blank'
									className='text-blue'
								>
									Link
								</a>
							</td>
						</tr>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>
								* item 1 <br />* item 2
							</td>
							<td className='p-2'>
								item 1 <br />
								item 2
							</td>
						</tr>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>
								1. item 1 <br />
								2. item 2
							</td>
							<td className='p-2'>
								item 1 <br />
								item 2
							</td>
						</tr>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>&gt; quoted text</td>
							<td className='p-2'>
								<span className='border-l-2 border-base-50 pl-2'>
									quoted text
								</span>
							</td>
						</tr>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>`inline code`</td>
							<td className='p-2'>
								<code className='rounded-md bg-black/10 px-1 py-px text-xs'>
									inline code
								</code>
							</td>
						</tr>
						<tr className='border-b border-gray-100 transition-colors hover:bg-gray-50'>
							<td className='p-2 font-monospace'>
								``` <br />
								code block <br />
								```
							</td>
							<td className='p-2'>
								<pre className='rounded-md bg-syntax-background p-6'>
									<code className='text-xs text-syntax-text'>
										code <br />
										block
									</code>
								</pre>
							</td>
						</tr>
					</tbody>
				</table>
			</details>
			<p>
				Embed rich content such as Tweets, YouTube videos, etc. Use the complete
				URL:{' '}
				<code className='rounded-md bg-black/10 px-1 py-px text-[13px]'>
					{'{% embed https://... %}.'}
				</code>{' '}
				<a href='#liquid' className='text-blue'>
					See a list of supported embeds.
				</a>
				In addition to images for the post&apos;s content, you can also drag and
				drop a cover image.
			</p>
		</>
	)
}

import { Token } from '@code-hike/lighter'
import Spinner from '@/components/common/Spinner'

export default function MarkdownCode({ lines }: { lines: Token[][] }) {
	return (
		<pre>
			<code>
				{lines.length === 0 ? (
					<div className='flex h-full w-full items-center justify-center'>
						<Spinner />
					</div>
				) : (
					lines.map((line, i) => (
						<div key={i} className='font-monospace text-base'>
							<span>
								{line.map((token, j) => (
									<span key={j} style={token.style}>
										{token.content}
									</span>
								))}
							</span>
						</div>
					))
				)}
			</code>
		</pre>
	)
}

import Spinner from '@/components/common/Spinner'
import PreFullScreen from '@/components/common/markdown/PreFullScreen'
import { Token, highlight } from '@code-hike/lighter'
import { FC, PropsWithChildren } from 'react'

async function _Pre(props: PropsWithChildren) {
	//@ts-ignore
	const code = props.children.props.children.trim()
	const { lines } = await highlight(code, 'ts', 'one-dark-pro')

	return (
		<>
			<div className='group relative mb-5 rounded-md bg-syntax-background p-6'>
				<PreFullScreen>
					<Code lines={lines} />
				</PreFullScreen>
				<Code lines={lines} />
			</div>
		</>
	)
}

const Pre = _Pre as unknown as FC
export default Pre

const Code = ({ lines }: { lines: Token[][] }) => {
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

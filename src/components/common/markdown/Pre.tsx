import { Token } from '@code-hike/lighter'
import MarkdownCode from '@/components/common/markdown/MarkdownCode'
import PreFullScreen from '@/components/common/markdown/PreFullScreen'

export default function Pre({ lines }: { lines: Token[][] }) {
	return (
		<>
			<div className='group relative mb-5 rounded-md bg-syntax-background p-6'>
				<PreFullScreen>
					<MarkdownCode lines={lines} />
				</PreFullScreen>
				<MarkdownCode lines={lines} />
			</div>
		</>
	)
}

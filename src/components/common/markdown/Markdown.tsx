import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { PropsWithChildren } from 'react'
import Pre from '@/components/common/markdown/Pre'

const components = {
	h2: (props: PropsWithChildren) => (
		<h2 {...props} className='my-[10px] text-3xl font-bold leading-tight'>
			{props.children}
		</h2>
	),
	p: (props: PropsWithChildren) => (
		<p {...props} className='mb-5'>
			{props.children}
		</p>
	),
	pre: Pre,
	code: (props: PropsWithChildren) => (
		<code className='rounded-md bg-black/10 px-1 py-[0.1em] text-base'>
			{props.children}
		</code>
	),
	ul: (props: PropsWithChildren) => (
		<ul className='mb-5 list-disc pl-6'>{props.children}</ul>
	),
}

export default function Markdown(props: MDXRemoteProps) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	)
}

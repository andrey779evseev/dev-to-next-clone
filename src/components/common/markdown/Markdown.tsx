import remarkGfm from 'remark-gfm'
import remarkIns from 'remark-ins'
import { PropsWithChildren } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import {
	MDXRemote as MDXRemoteClient,
	MDXRemoteSerializeResult,
} from 'next-mdx-remote'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import PreClient from '@/components/common/markdown/PreClient'
import PreServer from '@/components/common/markdown/PreServer'

const components = {
	h2: (props: PropsWithChildren) => (
		<h2 {...props} className='my-[10px] text-3xl font-bold leading-tight'>
			{props.children}
		</h2>
	),
	p: (props: PropsWithChildren) => (
		<p {...props} className='mb-5 only:m-0'>
			{props.children}
		</p>
	),
	ul: (props: PropsWithChildren) => (
		<ul className='mb-5 list-disc pl-6'>{props.children}</ul>
	),
	ol: (props: PropsWithChildren) => (
		<ol className='mb-5 list-decimal pl-6'>{props.children}</ol>
	),
	blockquote: (props: PropsWithChildren) => (
		<blockquote className='border-l-4 border-base-20 pl-5'>
			{props.children}
		</blockquote>
	),
	img: (props: { src?: string; alt?: string }) => (
		<a href={props.src}>
			<Image
				src={props.src!}
				alt={props.alt!}
				width={1000}
				height={400}
				className='h-auto w-full cursor-zoom-in'
			/>
		</a>
	),
	a: (props: PropsWithChildren<{ href?: string }>) => (
		<a href={props.href!} className='text-blue underline'>
			{props.children}
		</a>
	),
	hr: () => (
		<hr className='mx-auto my-10 w-1/4 rounded-md border border-dark opacity-10' />
	),
}

export const serverMdxComponents = {
	...components,
	pre: PreServer,
	code: (props: PropsWithChildren) => (
		<code className='rounded-md bg-black/10 px-1 py-[0.1em] text-base'>
			{props.children}
		</code>
	),
}

export const clientMdxComponents = {
	...components,
	pre: PreClient,
	code: (props: PropsWithChildren) => (
		<code className='rounded-md bg-black/10 px-1 py-[0.1em] text-sm'>
			{props.children}
		</code>
	),
}

export function MarkdownServer(props: MDXRemoteProps) {
	return (
		// @ts-expect-error
		<MDXRemote
			{...props}
			components={{ ...serverMdxComponents, ...(props.components || {}) }}
		/>
	)
}

export function MarkdownShared(props: MDXRemoteSerializeResult) {
	return <MDXRemoteClient {...props} components={clientMdxComponents} />
}

type MarkdownClientProps = {
	text: string
	className?: string
}

export function MarkdownClient(props: MarkdownClientProps) {
	const { text, className } = props
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm, remarkIns]}
			components={clientMdxComponents}
			className={className}
		>
			{text}
		</ReactMarkdown>
	)
}

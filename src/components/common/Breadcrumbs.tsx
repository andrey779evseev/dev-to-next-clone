type PropsType = {
	items: string[]
}

export default function Breadcrumbs(props: PropsType) {
	const { items } = props
	return (
		<div className='text-base-70'>
			{items.map((item, i) => (
				<span key={i}>
					{item}
					{i !== items.length - 1 ? ' > ' : ''}
				</span>
			))}
		</div>
	)
}

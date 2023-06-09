import ReadingList from '@/components/reading-list/ReadingList'

type PropsType = {
	params: {
		tag: string
	}
}

export default function ReadingListTagPage(props: PropsType) {
	const { params } = props
	return <ReadingList />
}

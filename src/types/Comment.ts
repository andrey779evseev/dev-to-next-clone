export type Comment = {
	id: number
	text: string
	name: string
	avatar: string
	date: string
	replies?: Comment[]
}

'use client'

import { memo, useMemo, useRef, useState } from 'react'
import AutoCompletePopover from '@/components/common/auto-complete/AutoCompletePopover'
import CloseIcon from '@/components/common/icons/CloseIcon'
import If from '@/components/common/If'
import { cn } from '@/utils/cn'
import { useClickOutside } from '@/hooks/useClickOutside'

type PropsType = {
	placeholder?: string
	title: string
	items: {
		title: string
		description: string
	}[]
	values: string[]
	className?: string
	max?: number
	onChange: (values: string[]) => void
	onFocus: () => void
}

const AutoCompleteInput = (props: PropsType) => {
	const {
		placeholder,
		title,
		items,
		values,
		className,
		max,
		onChange,
		onFocus,
	} = props
	const [isFocused, setIsFocused] = useState(false)
	const [text, setText] = useState('')
	const [editedValue, setEditedValue] = useState<number | null>(null)
	const [selectedItem, setSelectedItem] = useState<number | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const containerRef = useClickOutside<HTMLUListElement>(() => {
		setIsFocused(false)
		if (editedValue !== null && text.length === 0) setEditedValue(null)
	})

	const filteredItems = useMemo(
		() => {
			const filtered = items.filter(
				(x) => !values.includes(x.title) && x.title.includes(text)
			)
			if (filtered.length === 0 && selectedItem !== null) setSelectedItem(null)
			return filtered
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[items, values, text]
	)

	const focus = () => {
		setIsFocused(true)
		onFocus()
	}

	const select = (value: string) => {
		const copyValues = structuredClone(values)
		copyValues.splice(editedValue ?? values.length, 0, value)
		onChange(copyValues)
		setEditedValue(null)
		setSelectedItem(null)
		setText('')
		inputRef.current!.focus()
	}

	const remove = (value: string) => {
		onChange(values.filter((x) => x !== value))
		inputRef.current!.focus()
	}

	const editValue = (i: number) => {
		setEditedValue(i)
		setText(values[i])
		onChange(values.filter((_, index) => i !== index))
		inputRef.current!.focus()
	}

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (
			e.code === 'Backspace' &&
			text.length === 0 &&
			values.length !== 0 &&
			(editedValue === null || (editedValue !== null && editedValue !== 0))
		) {
			setText(
				values[editedValue !== null ? editedValue - 1 : values.length - 1]
			)
			onChange(
				editedValue !== null
					? values.filter((_, i) => i !== editedValue - 1)
					: values.slice(0, values.length - 1)
			)
			if (editedValue !== null) setEditedValue(editedValue - 1)

			e.preventDefault()
			return false
		}
		if (e.code === 'Space' && text.length !== 0) {
			select(text)

			e.preventDefault()
			return false
		}
		if (e.code === 'ArrowDown' && filteredItems.length !== 0) {
			if (selectedItem === null) setSelectedItem(0)
			else {
				if (selectedItem === filteredItems.length - 1) setSelectedItem(0)
				else setSelectedItem((prev) => prev! + 1)
			}

			e.preventDefault()
			return false
		}
		if (e.code === 'ArrowUp' && filteredItems.length !== 0) {
			if (selectedItem === null) setSelectedItem(filteredItems.length - 1)
			else {
				if (selectedItem === 0) setSelectedItem(filteredItems.length - 1)
				else setSelectedItem((prev) => prev! - 1)
			}

			e.preventDefault()
			return false
		}
		if (e.code === 'Enter' && selectedItem !== null) {
			select(filteredItems[selectedItem].title)

			e.preventDefault()
			return false
		}
	}

	return (
		<ul
			className={cn('relative flex w-full list-none flex-wrap', className)}
			ref={containerRef}
		>
			{values.map((value, i) => (
				<li
					className='mb-1 mr-1 flex w-max rounded-md bg-syntax-error/10'
					style={{
						order:
							editedValue !== null
								? editedValue === i
									? i + 2
									: i + 1
								: i + 1,
					}}
					key={i}
				>
					<button className='p-1 text-base-80' onClick={() => editValue(i)}>
						<span className='mr-1 text-syntax-error'>#</span>
						{value}
					</button>
					<button
						className='p-1 transition-colors hover:text-danger'
						onClick={() => remove(value)}
					>
						<CloseIcon />
					</button>
				</li>
			))}
			<li
				className='self-center'
				style={{
					order:
						editedValue !== null ? editedValue + 1 : Math.max(1, values.length),
				}}
			>
				<input
					type='text'
					className='w-full text-dark outline-none placeholder:text-base-60'
					placeholder={placeholder}
					onFocus={focus}
					ref={inputRef}
					onKeyDown={onKeyDown}
					value={text}
					onChange={(e) => {
						console.log(e.target.value)
						setText(e.target.value)
					}}
				/>
			</li>
			<If condition={isFocused}>
				<AutoCompletePopover
					filteredItems={filteredItems}
					max={max}
					select={select}
					selectedItem={selectedItem}
					text={text}
					title={title}
					values={values}
				/>
			</If>
		</ul>
	)
}

export default memo(AutoCompleteInput)

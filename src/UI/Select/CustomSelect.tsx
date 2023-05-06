import classnames from 'classnames'
import { useOnClickOutside } from 'hooks'
import React, { FC, memo, useRef, useState } from 'react'

import CustomOption from './Option/CustomOption'
import cl from './style.module.scss'
import { CustomOptionValue, OptionItem } from './types'

interface CustomSelectProps {
	optionItemsList: OptionItem[]
	placeholder?: string
	onChange: (value: CustomOptionValue) => void
	value: CustomOptionValue
}

const CustomSelect: FC<CustomSelectProps> = ({
	optionItemsList,
	placeholder,
	onChange,
	value
}) => {
	const [showSelect, setShowSelect] = useState(false)

	const selectContainerRef = useRef(null)
	const selectPlaceholder = placeholder || 'Выберите из списка'

	const selectedTextStyles = classnames([cl.selectedText], {
		[cl.selectedTextActive]: showSelect
	})
	const selectOptionsStyles = classnames([cl.selectOptions], {
		[cl.selectOptionsShow]: showSelect
	})
	const clickOutsideHandler = () => setShowSelect(false)
	const changeSelectedOption = (optionItem: OptionItem) => {
		onChange(optionItem.value)
		setShowSelect(false)
	}
	const showSelectHandler = () => {
		setShowSelect(true)
	}
	useOnClickOutside<HTMLDivElement>(selectContainerRef, clickOutsideHandler)
	return (
		<div ref={selectContainerRef} className={cl.selectContainer}>
			<div
				tabIndex={0}
				onClick={showSelectHandler}
				className={selectedTextStyles}
			>
				{optionItemsList.find((optionItem) => optionItem.value === value)
					?.text || selectPlaceholder}
			</div>
			<ul className={selectOptionsStyles}>
				{optionItemsList.map((optionItem) => (
					<CustomOption
						value={value}
						changeSelectedOption={changeSelectedOption}
						key={optionItem.value}
						optionItem={optionItem}
					/>
				))}
			</ul>
		</div>
	)
}

export default memo(CustomSelect)

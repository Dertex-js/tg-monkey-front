import classnames from 'classnames'
import React, { FC } from 'react'

import { CustomOptionValue, OptionItem } from '../types'
import cl from './style.module.scss'

interface CustomOptionProps {
	optionItem: OptionItem
	changeSelectedOption: (optionItem: OptionItem) => void
	value: CustomOptionValue
}

const CustomOption: FC<CustomOptionProps> = ({
	optionItem,
	changeSelectedOption,
	value
}) => {
	const optionStyles = classnames([cl.option], {
		[cl.optionActive]: value === optionItem.value
	})
	return (
		<li
			className={optionStyles}
			onClick={() => changeSelectedOption(optionItem)}
		>
			{optionItem.text}
		</li>
	)
}

export default CustomOption

import React, { FC, InputHTMLAttributes } from 'react'

import cl from './style.module.scss'

export interface CustomRadioItemProps
	extends InputHTMLAttributes<HTMLInputElement> {
	labelTitle: string
}

const CustomRadioItem: FC<CustomRadioItemProps> = ({
	id,
	labelTitle,
	...defaultProps
}) => (
	<div className={cl.container}>
		<input {...defaultProps} id={id} type="radio" />
		<label htmlFor={id}>{labelTitle}</label>
	</div>
)

export default CustomRadioItem

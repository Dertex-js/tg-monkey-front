import classnames from 'classnames'
import React, { ButtonHTMLAttributes, FC } from 'react'

import cl from './style.module.scss'
import { ButtonSizes, ButtonStyles, ButtonTextStyles } from './types'

export interface CustomButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	styleTypes?: (ButtonTextStyles | ButtonSizes | ButtonStyles)[]
}

const CustomButton: FC<CustomButtonProps> = ({
	styleTypes: styleTypesProps = [],
	children,
	onClick,
	className,
	disabled,
	type = 'button',
	...defaultProps
}) => {
	const styleTypes = [ButtonTextStyles.MEDIUM, ...styleTypesProps]
	const btnClasses = classnames([
		cl.btn,
		className,
		...styleTypes.map((styleType) => cl[`btn${styleType}`])
	])
	return (
		<button
			onClick={(event) => !disabled && onClick?.(event)}
			className={btnClasses}
			disabled={disabled}
			type={type}
			{...defaultProps}
		>
			{children}
		</button>
	)
}

export default CustomButton

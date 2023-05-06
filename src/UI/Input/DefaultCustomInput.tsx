import classnames from 'classnames'
import React, { FC, InputHTMLAttributes } from 'react'

import ValidateNotify from './ValidateNotify'
import cl from './style.module.scss'
import { InputValidate } from './types'

export interface CustomInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	phoneMask?: boolean
	children?: React.ReactNode
	styleTypes?: InputValidate[]
	error?: string
}

const DefaultCustomInput: FC<CustomInputProps> = ({
	styleTypes: styleTypesProps = [],
	children,
	error,
	...defaultProps
}) => {
	const styleTypes = [...styleTypesProps]
	const inputClasses = classnames([
		cl.input,
		...styleTypes.map((styleType) => cl[`input${styleType}`])
	])

	return (
		<div className={cl.container}>
			<input className={inputClasses} {...defaultProps} />
			{children}
			{error && <ValidateNotify error={error} />}
		</div>
	)
}

export default DefaultCustomInput

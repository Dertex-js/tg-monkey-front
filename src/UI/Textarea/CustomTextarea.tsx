import classnames from 'classnames'
import React, { FC, InputHTMLAttributes } from 'react'

import ValidateNotify from '../Input/ValidateNotify'
import { InputValidate } from '../Input/types'
import cl from './style.module.scss'

interface CustomTextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	styleTypes?: InputValidate[]
	error?: string
}

const CustomTextarea: FC<CustomTextareaProps> = ({
	styleTypes: styleTypesProps = [],
	error,
	...defaultProps
}) => {
	const styleTypes = [...styleTypesProps]
	const textareaClasses = classnames([
		cl.textarea,
		...styleTypes.map((styleType) => cl[`textarea${styleType}`])
	])
	return (
		<div className={cl.container}>
			<textarea className={textareaClasses} {...defaultProps} />
			{error && <ValidateNotify error={error} />}
		</div>
	)
}

export default CustomTextarea

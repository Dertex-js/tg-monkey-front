import classnames from 'classnames'
import React, { FC } from 'react'

import { ValidateNotify } from 'UI'

import cl from './style.module.scss'
import { CustomInputProps } from './types'

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

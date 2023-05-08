import React, { FC, useCallback, useState } from 'react'

import { CustomInput } from 'UI'

import { CustomInputProps } from './types'

interface PassCustomInputProps extends CustomInputProps {
	validateError?: string
}

export enum PasswordPlaceholders {
	PASSWORD = 'Пароль',
	CONFIRM_PASSWORD = 'Повторите пароль'
}

const PassCustomInput: FC<PassCustomInputProps> = ({
	validateError,
	...defaultProps
}) => {
	const [type, setType] = useState<'text' | 'password'>('password')
	const changeInputType = useCallback(() => {
		setType((prev) => (prev === 'text' ? 'password' : 'text'))
	}, [setType])

	return (
		<CustomInput error={validateError} type={type} {...defaultProps}>
			<button
				type="button"
				onClick={changeInputType}
				aria-label="Показать пароль"
			/>
		</CustomInput>
	)
}

export default PassCustomInput

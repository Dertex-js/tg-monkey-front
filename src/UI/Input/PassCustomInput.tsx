import React, { FC, useCallback, useState } from 'react'

import DefaultCustomInput, { CustomInputProps } from './DefaultCustomInput'

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
		<DefaultCustomInput error={validateError} type={type} {...defaultProps}>
			<button
				type="button"
				onClick={changeInputType}
				aria-label="Показать пароль"
			/>
		</DefaultCustomInput>
	)
}

export default PassCustomInput

import React, { FC } from 'react'

import { CustomInput } from 'UI'

import { CustomInputProps, InputValidate } from './types'

interface EmailCustomInputProps extends CustomInputProps {
	validateError?: string
}

const EmailCustomInput: FC<EmailCustomInputProps> = ({
	validateError,
	...defaultProps
}) => (
	<CustomInput
		type="email"
		placeholder="Электронная почта"
		styleTypes={validateError ? [InputValidate.ERROR] : []}
		error={validateError}
		{...defaultProps}
	/>
)

export default EmailCustomInput

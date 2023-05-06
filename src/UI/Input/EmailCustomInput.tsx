import React, { FC } from 'react'

import DefaultCustomInput, { CustomInputProps } from './DefaultCustomInput'
import { InputValidate } from './types'

interface EmailCustomInputProps extends CustomInputProps {
	validateError?: string
}

const EmailCustomInput: FC<EmailCustomInputProps> = ({
	validateError,
	...defaultProps
}) => (
	<DefaultCustomInput
		type="email"
		placeholder="Электронная почта"
		styleTypes={validateError ? [InputValidate.ERROR] : []}
		error={validateError}
		{...defaultProps}
	/>
)

export default EmailCustomInput

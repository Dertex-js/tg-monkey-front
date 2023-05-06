import React, { FC, useEffect, useState } from 'react'

import DefaultCustomInput, { CustomInputProps } from './DefaultCustomInput'

interface PhoneCustomInputProps extends CustomInputProps {
	validateError?: string
}

const PhoneCustomInput: FC<PhoneCustomInputProps> = ({
	validateError,
	value,
	...defaultProps
}) => {
	const [formattedValue, setFormattedValue] = useState('')

	const formatPhoneNumber = (phoneValue: string) => {
		if (!phoneValue) return phoneValue
		const phoneNumber = phoneValue.replace(/[^\d]/g, '')
		const phoneNumberLength = phoneNumber.length
		if (phoneNumberLength < 5)
			return `${phoneNumber.slice(0, 1)}${phoneNumber.slice(1)}`
		if (phoneNumberLength < 8) {
			return `${phoneNumber.slice(0, 1)} (${phoneNumber.slice(
				1,
				4
			)}) ${phoneNumber.slice(4)}`
		}
		return `${phoneNumber.slice(0, 1)} (${phoneNumber.slice(
			1,
			4
		)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 11)}`
	}
	useEffect(() => {
		const formattedPhoneNumber = formatPhoneNumber(value as string)
		setFormattedValue(formattedPhoneNumber)
	}, [value])

	return (
		<DefaultCustomInput
			placeholder="8 (999)-999-9999"
			value={formattedValue}
			error={validateError}
			{...defaultProps}
		/>
	)
}

export default PhoneCustomInput

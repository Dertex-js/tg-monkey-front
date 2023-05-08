import React, { InputHTMLAttributes } from 'react'

export enum InputValidate {
	ERROR = 'ValidateError'
}

export interface CustomInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	phoneMask?: boolean
	children?: React.ReactNode
	styleTypes?: InputValidate[]
	error?: string
}

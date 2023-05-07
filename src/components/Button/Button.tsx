import React, { ButtonHTMLAttributes, FC } from 'react'

import cl from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = ({ className, ...rest }) => (
	<button {...rest} className={cl.button + className} />
)

export default Button

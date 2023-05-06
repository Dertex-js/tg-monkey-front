import React, { FC } from 'react'

import cl from './style.module.scss'

interface ValidateNotifyProps {
	error: string
}

const ValidateNotify: FC<ValidateNotifyProps> = ({ error }) => (
	<div className={cl.validateNotify}>
		<span>{error}</span>
	</div>
)

export default ValidateNotify

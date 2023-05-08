import { useTelegram } from 'hooks'
import React from 'react'

import { CustomButton } from 'UI'

import cl from './style.module.scss'

const Header = () => {
	const { onClose, user } = useTelegram()

	return (
		<div className={cl.header}>
			<CustomButton onClick={onClose} className={cl.button}>
				Закрыть
			</CustomButton>
			<span className={cl.username}>{user?.username}</span>
		</div>
	)
}

export default Header

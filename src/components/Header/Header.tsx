import React from 'react'

import { useTelegram } from '../../hooks/useTelegram'
import Button from '../Button/Button'
import cl from './Header.module.scss'

const Header = () => {
	const { onClose, user } = useTelegram()

	return (
		<div className={cl.header}>
			<Button onClick={onClose}>Закрыть</Button>
			<span className={cl.username}>{user?.username}</span>
		</div>
	)
}

export default Header

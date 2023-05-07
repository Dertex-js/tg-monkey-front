import React from 'react'

import Button from '../Button/Button'
import cl from './Header.module.scss'

const Header = () => {
	// @ts-ignore
	const tg = window.Telegram.WebApp

	const onClose = () => tg.close()

	return (
		<div className={cl.header}>
			<Button onClick={onClose}>Закрыть</Button>
			<span className={cl.username}>{tg.initDataUnsafe?.user?.username}</span>
		</div>
	)
}

export default Header

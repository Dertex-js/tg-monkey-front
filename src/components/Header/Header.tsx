import { closeIcon } from 'assets/images/icons'
import { useTelegram } from 'hooks'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
	const { onClose, user } = useTelegram()
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<div className="flex h-[10vh] w-full items-center justify-between bg-[var(--tg-theme-button-color)] p-[5%]">
			{pathname === '/' && (
				<span>{user?.username || 'UserName'} любит Monkey Grinder</span>
			)}
			{pathname !== '/' && (
				<button
					className="rounded bg-[var(--tg-theme-button-color)] px-[10px] py-[6px] text-[button_text_color]"
					onClick={() => navigate('/')}
				>
					Назад
				</button>
			)}
			<img src={closeIcon} alt="Close" onClick={onClose} />
		</div>
	)
}

export default Header

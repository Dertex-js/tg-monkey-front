import { closeIcon } from 'assets/images/icons'
import { useTelegram } from 'hooks'
import React from 'react'

const Header = () => {
	const { onClose, user } = useTelegram()

	return (
		<div className="flex h-[10%] w-full items-center justify-between bg-[#0087cd] p-[5%]">
			<span className="text-white">
				{user?.username || 'UserName'} любит Monkey Grinder
			</span>
			<img src={closeIcon} alt="Close" onClick={onClose} />
		</div>
	)
}

export default Header

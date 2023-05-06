import { dropdownIcon } from 'assets/images/icons'
import { useMatchMedia, useOnClickOutside } from 'hooks'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'

import CustomDropdownItemsList from './CustomDropdownItemsList'
import cl from './style.module.scss'
import { CustomDropdownProps } from './types'

const CustomDropdown: FC<CustomDropdownProps> = ({
	dropdownItemsList,
	labelText,
	children
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownContainer = useRef(null)

	const { isTable } = useMatchMedia()

	const onCloseHandler = useCallback(() => {
		setIsOpen(false)
	}, [])

	useEffect(() => {
		if (!(isTable && isOpen)) {
			return
		}
		document.body.style.overflowY = 'hidden'
		return () => {
			document.body.style.overflowY = 'auto'
		}
	}, [isTable, isOpen])
	useOnClickOutside<HTMLDivElement>(dropdownContainer, onCloseHandler)

	return (
		<div ref={dropdownContainer} className={cl.container}>
			<div
				onClick={() => {
					setIsOpen((prev) => !prev)
				}}
				className={cl.title}
			>
				{labelText ? (
					<>
						<span>labelText</span>
						<img src={dropdownIcon} alt="dropdown" />
					</>
				) : (
					children
				)}
			</div>
			{isOpen && (
				<CustomDropdownItemsList
					isTable={isTable}
					onClose={onCloseHandler}
					dropdownItemsList={dropdownItemsList}
				/>
			)}
		</div>
	)
}

export default CustomDropdown

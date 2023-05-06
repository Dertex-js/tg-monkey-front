import React, { FC } from 'react'

import { CustomButton, CustomLink } from 'UI'

import { ButtonSizes, ButtonStyles } from '../Button/types'
import { LinkStyles } from '../Link/types'
import cl from './style.module.scss'
import { DropdownListItem } from './types'

interface CustomDropdownListItemProps {
	onClose: () => void
	dropdownListItem: DropdownListItem
}

const CustomDropdownItem: FC<CustomDropdownListItemProps> = ({
	onClose,
	dropdownListItem
}) => {
	if (dropdownListItem.link) {
		return (
			<CustomLink
				isDropdownLink
				styleTypes={[LinkStyles.DROPDOWN]}
				onClick={onClose}
				path={dropdownListItem.link}
			>
				<div className={cl.icon}>
					<img src={dropdownListItem.icon} alt="icon" />
				</div>
				{dropdownListItem.label}
			</CustomLink>
		)
	}

	return (
		<CustomButton
			styleTypes={[ButtonSizes.WIDE, ButtonStyles.DROPDOWN]}
			aria-label="Перейти к пункту меню"
			onClick={(event) => {
				dropdownListItem.onClick?.(event)
				onClose()
			}}
		>
			<img src={dropdownListItem.icon} alt="icon" />
			{dropdownListItem.label}
		</CustomButton>
	)
}

export default CustomDropdownItem

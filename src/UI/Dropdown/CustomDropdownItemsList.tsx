import classnames from 'classnames'
import React, { FC } from 'react'

import CustomButton from '../Button/CustomButton'
import { ButtonSizes, ButtonStyles } from '../Button/types'
import CustomDropdownItem from './CustomDropdownItem'
import cl from './style.module.scss'
import { CustomDropdownListProps } from './types'

const CustomDropdownItemsList: FC<CustomDropdownListProps> = ({
	dropdownItemsList,
	onClose,
	className,
	isTable
}) => {
	const listStyles = classnames([cl.list], {
		[className!]: className
	})
	return (
		<div className={listStyles}>
			{dropdownItemsList.map((dropdownListItem) => (
				<CustomDropdownItem
					dropdownListItem={dropdownListItem}
					key={dropdownListItem.id}
					onClose={onClose}
				/>
			))}
			{isTable && (
				<div className={cl.dropdownCloseBtn}>
					<CustomButton
						onClick={onClose}
						styleTypes={[ButtonStyles.DROPDOWN, ButtonSizes.WIDE]}
					>
						Отмена
					</CustomButton>
				</div>
			)}
		</div>
	)
}
export default CustomDropdownItemsList

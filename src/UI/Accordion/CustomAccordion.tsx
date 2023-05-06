import { dropdownIcon } from 'assets/images/icons'
import classnames from 'classnames'
import React, { FC, useState } from 'react'

import cl from './style.module.scss'

interface CustomAccordionProps {
	iconSrcUrl: string
	label: string
	contentItemsLength?: string
	children: React.ReactNode
}

const CustomAccordion: FC<CustomAccordionProps> = ({
	iconSrcUrl,
	label,
	contentItemsLength,
	children
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const accordionToggle = () => {
		setIsOpen((prev) => !prev)
	}

	const accordionContentClasses = classnames([cl.accordionContent], {
		[cl.accordionContentOpen]: isOpen
	})
	return (
		<div className={cl.container}>
			<div onClick={accordionToggle} className={cl.accordionToggle}>
				<div className={cl.toggleDescription}>
					<img src={iconSrcUrl} alt="icon" />
					<span>{label}</span>
					{contentItemsLength && <span>{contentItemsLength}</span>}
				</div>
				<div className={cl.toggleIcon}>
					<img src={dropdownIcon} alt="dropdown" />
				</div>
			</div>
			<div className={accordionContentClasses}>{children}</div>
		</div>
	)
}

export default CustomAccordion

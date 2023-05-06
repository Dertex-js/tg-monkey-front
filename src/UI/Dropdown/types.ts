import React from 'react'
import { NodeElementsId } from 'types'

interface DropdownListItemDefault {
	id: NodeElementsId
	icon?: string
	label: string
}

interface DropdownListItemLink extends DropdownListItemDefault {
	link: string
	onClick?: never
}

interface DropdownListItemButton extends DropdownListItemDefault {
	link?: never
	onClick: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		...params: any
	) => void
}

export type DropdownListItem = DropdownListItemLink | DropdownListItemButton

export interface CustomDropdownProps {
	dropdownItemsList: DropdownListItem[]
	labelText?: string
	children?: React.ReactNode
}

export interface CustomDropdownListProps {
	dropdownItemsList: DropdownListItem[]
	className?: string
	isTable?: boolean
	onClose: () => void
}

export interface ProfileMenuDropdownProps extends CustomDropdownProps {
	refEl: React.Ref<HTMLDivElement>
	setIsOpen: (value: boolean) => void
	isOpen: boolean
	onClose: () => void
	firstName?: string
	lastName?: string
	photo?: string | ArrayBuffer | null
}

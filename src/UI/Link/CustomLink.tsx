import classnames from 'classnames'
import React, { FC, LinkHTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'

import cl from './style.module.scss'
import { LinkSizes, LinkStyles, LinkTextStyles } from './types'

export interface CustomLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
	path: string
	className?: string
	isTargetBlank?: boolean
	styleTypes?: (LinkStyles | LinkTextStyles | LinkSizes)[]
	isAsideLink?: boolean
	isDropdownLink?: boolean
	isBackLink?: boolean
	onClick?: () => void
}

const CustomLink: FC<CustomLinkProps> = ({
	path,
	isTargetBlank = false,
	styleTypes: styleTypesProps = [],
	children,
	className,
	isAsideLink = false,
	isDropdownLink = false,
	...defaultProps
}) => {
	const styleTypes = [LinkTextStyles.REGULAR, ...styleTypesProps]
	const asideLinkActiveClasses = classnames([
		cl.link,
		cl.linkAsideActive,
		className,
		...styleTypes.map((styleType) => cl[`link${styleType}`])
	])
	const linkActiveClasses = classnames([
		cl.link,
		cl.linkDropdownActive,
		className,
		...styleTypes.map((styleType) => cl[`link${styleType}`])
	])
	const linkClasses = classnames([
		cl.link,
		className,
		...styleTypes.map((styleType) => cl[`link${styleType}`])
	])
	if (isTargetBlank) {
		return (
			<a
				{...defaultProps}
				className={linkClasses}
				href={path}
				target="_to"
				rel="noreferrer"
			>
				{children}
			</a>
		)
	}
	if (isAsideLink) {
		return (
			<NavLink
				className={({ isActive }) =>
					isActive ? asideLinkActiveClasses : linkClasses
				}
				to={path}
				{...defaultProps}
			>
				{children}
			</NavLink>
		)
	}
	if (isDropdownLink) {
		return (
			<NavLink
				className={({ isActive }) =>
					isActive ? linkActiveClasses : linkClasses
				}
				to={path}
				{...defaultProps}
			>
				{children}
			</NavLink>
		)
	}
	return (
		<NavLink className={linkClasses} to={path} {...defaultProps}>
			{children}
		</NavLink>
	)
}

export default CustomLink

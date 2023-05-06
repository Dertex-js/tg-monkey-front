import classnames from 'classnames'
import { useOnClickOutside } from 'hooks'
import React, { FC, useEffect, useRef } from 'react'

import cl from './style.module.scss'
import { CustomModalHeight, CustomModalSize } from './types'

interface CustomModalProps {
	title: string
	isOpen: boolean
	styleTypes: (CustomModalHeight | CustomModalSize)[]
	closeModal: () => void
	children: React.ReactNode
}

const CustomModal: FC<CustomModalProps> = ({
	title,
	isOpen,
	closeModal,
	styleTypes: styleTypesProps = [],
	children
}) => {
	const modalContentRef = useRef(null)
	const styleTypes = [...styleTypesProps]

	const modalClasses = classnames(
		[cl.modal, ...styleTypes.map((styleType) => cl[`modal${styleType}`])],
		{
			[cl.modalIsOpen]: isOpen
		}
	)

	const modalContentClasses = classnames([
		cl.modalContent,
		...styleTypes.map((styleType) => cl[`modalContent${styleType}`])
	])

	const clickOutsideHandler = () => closeModal()
	useOnClickOutside<HTMLDivElement>(modalContentRef, clickOutsideHandler)

	useEffect(() => {
		if (!isOpen) {
			return
		}
		document.body.style.overflowY = 'hidden'
		return () => {
			document.body.style.overflowY = 'auto'
		}
	}, [isOpen])

	return (
		<div className={modalClasses}>
			<div className={cl.modalContainer}>
				<div ref={modalContentRef} className={modalContentClasses}>
					<div className={cl.modalHeader}>
						<h2>{title}</h2>
						<button
							className={cl.modalExit}
							aria-label="Закрыть модальное окно"
							onClick={closeModal}
						/>
					</div>
					<div className={cl.modalBody}>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default CustomModal

import { closeIcon } from 'assets/images/icons'
import classnames from 'classnames'
import React, { FC, useEffect, useState } from 'react'

import cl from './style.module.scss'
import { AlertType } from './types'

interface CustomAlertProps {
	message: string
	type: AlertType
	styleTypes: AlertType[]
}

const CustomAlert: FC<CustomAlertProps> = ({
	styleTypes: styleTypesProps = [],
	message,
	type
}) => {
	const styleTypes = [...styleTypesProps]
	const alertClasses = classnames([
		cl.alert,
		...styleTypes.map((styleType) => cl[`alert${styleType}`])
	])

	const [isOpen, setIsOpen] = useState(false)

	const clickHandler = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		setIsOpen(true)
	}, [message])

	if (!isOpen) {
		return <></>
	}

	return (
		<div className={alertClasses}>
			<div className={cl.alertContainer}>
				<span className={cl.header}>
					{type === AlertType.ERROR ? 'Ошибка!' : 'Успешно!'}
				</span>
				<span className={cl.desc}>{message}</span>
				<button onClick={() => clickHandler()} className={cl.closeBtn}>
					<img src={closeIcon} alt="close" />
				</button>
			</div>
		</div>
	)
}

export default CustomAlert

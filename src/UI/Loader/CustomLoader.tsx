import classnames from 'classnames'
import React, { FC } from 'react'

import cl from './style.module.scss'
import { LoaderStyles } from './types'

export interface CustomLoaderProps {
	styleTypes?: LoaderStyles[]
}

const CustomLoader: FC<CustomLoaderProps> = ({ styleTypes = [] }) => {
	const loaderClasses = classnames([
		cl.loader,
		...styleTypes.map((styleType) => cl[`loader${styleType}`])
	])
	return (
		<div className={cl.container}>
			<div className={loaderClasses} />
		</div>
	)
}

export default CustomLoader

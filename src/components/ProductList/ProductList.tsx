import React from 'react'
import { NavLink } from 'react-router-dom'

import cl from './style.module.scss'

const ProductList = () => {
	const x = 'Prod'
	return (
		<div>
			<div className={cl.s}>{x}</div>
			<NavLink to="form">Form</NavLink>
		</div>
	)
}

export default ProductList

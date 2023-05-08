import React from 'react'
import { useRoutes } from 'react-router-dom'

import Form from '../components/Form/Form'
import ProductList from '../components/ProductList/ProductList'

const Routes = () =>
	useRoutes([
		{
			path: '/',
			element: <ProductList />
		},
		{
			path: 'form',
			element: <Form />
		}
	])

export default Routes

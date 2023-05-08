import { useTelegram } from 'hooks'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Form from 'components/Form/Form'
import Header from 'components/Header/Header'
import ProductList from 'components/ProductList/ProductList'

import './App.scss'

const App = () => {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route index element={<ProductList />} />
				<Route path="form" element={<Form />} />
			</Routes>
		</div>
	)
}

export default App

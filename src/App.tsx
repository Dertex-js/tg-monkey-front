import { useTelegram } from 'hooks'
import React, { useEffect } from 'react'
import Routes from 'routes/Routes'

import Header from 'components/Header/Header'

import './App.scss'

const App = () => {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className="App">
			<Header />
			<Routes />
		</div>
	)
}

export default App

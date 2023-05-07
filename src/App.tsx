import React, { useEffect } from 'react'

import './App.scss'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import { useTelegram } from './hooks/useTelegram'

const App = () => {
	const { tg, onToggleButton } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className="App">
			<Header />
			<Button onClick={onToggleButton}>Toggle</Button>
		</div>
	)
}

export default App

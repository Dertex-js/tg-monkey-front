import React, { useEffect } from 'react'

import './App.scss'

// @ts-ignore
const tg = window.Telegram.WebApp

const App = () => {
	useEffect(() => {
		tg.ready()
	}, [])

	const asd = 4

	const onClose = () => tg.close()

	return (
		<div className="App">
			<div>{asd}</div>
			<button onClick={onClose}>Закрыть</button>
		</div>
	)
}

export default App

import React, { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface CardProps {
	title: string
	route: string
}

const Card: FC<CardProps> = ({ title, route }) => {
	const navigate = useNavigate()

	const handleRoutePush = useCallback(() => {
		navigate(route)
	}, [])

	return (
		<div
			className="flex h-full w-full items-center justify-center rounded-lg border bg-[var(--tg-theme-bg-color)] p-[20px]"
			onClick={handleRoutePush}
		>
			<span className="text-lg">{title}</span>
		</div>
	)
}

export default Card

import React, { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface CardProps {
	title: string
	route: string
}

const Card: FC<CardProps> = ({ title, route }) => {
	const navigate = useNavigate()

	const handleClick = useCallback(() => {
		navigate(route)
	}, [])

	return (
		<div
			className="flex h-full w-full items-center justify-center rounded-lg border bg-gray-500"
			onClick={handleClick}
		>
			<span className="text-white">{title}</span>
		</div>
	)
}

export default Card

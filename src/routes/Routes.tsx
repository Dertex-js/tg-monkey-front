import Checklists from 'pages/Checklists/Checklists'
import CompanyNews from 'pages/CompanyNews/CompanyNews'
import MainPage from 'pages/MainPage/MainPage'
import Regulations from 'pages/Regulations/Regulations'
import SafetyRegulations from 'pages/SafetyRegulations/SafetyRegulations'
import Standards from 'pages/Standards/Standards'
import Ttk from 'pages/Ttk/Ttk'
import React from 'react'
import { useRoutes } from 'react-router-dom'

const Routes = () =>
	useRoutes([
		{
			path: '/',
			element: <MainPage />
		},
		{
			path: '/ttk',
			element: <Ttk />
		},
		{
			path: '/regulations',
			element: <Regulations />
		},
		{
			path: '/standards',
			element: <Standards />
		},
		{
			path: '/safety-regulations',
			element: <SafetyRegulations />
		},
		{
			path: '/checklists',
			element: <Checklists />
		},
		{
			path: '/company-news',
			element: <CompanyNews />
		}
	])

export default Routes

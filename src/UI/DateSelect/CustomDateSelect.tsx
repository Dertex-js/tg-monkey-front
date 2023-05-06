import React, { FC, useEffect, useMemo, useState } from 'react'
import { Constants } from 'types'

import { getAmountDaysByMonth, getOptionsItemsListFromArray } from 'helpers'

import { CustomSelect } from 'UI'

import { CustomOptionValue } from '../Select/types'
import cl from './style.module.scss'
import { MonthList } from './types'

export interface FullDate {
	date: Date
	day: number
	month: number
	year: number
}
export interface valueOfDate {
	day: number | null
	month: number | null
	year: number | null
}
interface CustomDateSelectWithDateProps {
	date: Date
	dateObject?: never
	onChange: ({ day, month, year }: valueOfDate) => void
	name?: string
}
interface CustomDateSelectWithDateObjectProps {
	date?: never
	dateObject: Omit<FullDate, 'date'>
	onChange: ({ day, month, year }: valueOfDate) => void
	name?: string
}

const CustomDateSelect: FC<
	CustomDateSelectWithDateProps | CustomDateSelectWithDateObjectProps
> = ({ onChange, date, dateObject, name }) => {
	const [currentDay, setCurrentDay] = useState(1)
	const [currentMonth, setCurrentMonth] = useState(1)
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
	const years = useMemo(
		() =>
			Array(Constants.YEAR_LIST_LIMIT)
				.fill(true)
				.map((_, index) => currentYear - index),
		[]
	)

	const daysList = () => {
		const daysAmount = getAmountDaysByMonth(
			date ? new Date(date).getFullYear() : currentYear,
			date ? new Date(date).getMonth() + 1 : currentMonth
		)
		return Array(daysAmount)
			.fill(true)
			.map((_, index) => index + 1)
	}

	useEffect(() => {
		if (!daysList.length) {
			return
		}
		const lastDaysListElement = [...daysList()].pop() || 0
		if (currentDay > lastDaysListElement) {
			setCurrentDay(lastDaysListElement)
		}
	}, [daysList])

	const changeSelectedDay = (value: CustomOptionValue) => {
		setCurrentDay(value as number)
		const innerDate = date ? new Date(date) : new Date()
		const prepared = {
			day: value as number,
			month: innerDate?.getMonth() ?? currentMonth,
			year: innerDate?.getFullYear() ?? currentYear
		}
		onChange(prepared)
	}

	const changeSelectedMonth = (value: CustomOptionValue) => {
		setCurrentMonth(value as number)
		const innerDate = date ? new Date(date) : new Date()
		onChange({
			day: innerDate?.getDate() ?? currentDay,
			month: value as number,
			year: innerDate?.getFullYear() ?? currentYear
		})
	}

	const changeSelectedYear = (value: CustomOptionValue) => {
		setCurrentYear(value as number)
		const innerDate = date ? new Date(date) : new Date()
		onChange({
			day: innerDate?.getDate() ?? currentDay,
			month: innerDate?.getMonth() ?? currentMonth,
			year: value as number
		})
	}

	const optionsSelectDay = getOptionsItemsListFromArray(daysList(), true)
	const optionsSelectMonth = getOptionsItemsListFromArray(
		Object.values(MonthList)
	)
	const optionSelectYears = getOptionsItemsListFromArray(years, true)

	useEffect(() => {
		if (date) {
			const innerDate = new Date(date)
			setCurrentDay(innerDate.getDate())
			setCurrentMonth(innerDate.getMonth())
			setCurrentYear(innerDate.getFullYear())
			return
		}
		if (!dateObject) {
			return
		}
		setCurrentDay(dateObject.day)
		setCurrentMonth(dateObject.month)
		setCurrentYear(dateObject.year)
	}, [date])

	// TODO refactor types input hidden
	return (
		<div className={cl.container}>
			<input
				type="hidden"
				value={date as string | number | readonly string[] | undefined}
				name={name}
			/>
			<CustomSelect
				value={currentDay}
				placeholder="День"
				onChange={changeSelectedDay}
				optionItemsList={optionsSelectDay}
			/>
			<CustomSelect
				value={currentMonth}
				placeholder="Месяц"
				onChange={changeSelectedMonth}
				optionItemsList={optionsSelectMonth}
			/>
			<CustomSelect
				value={currentYear}
				placeholder="Год"
				onChange={changeSelectedYear}
				optionItemsList={optionSelectYears}
			/>
		</div>
	)
}

export default CustomDateSelect

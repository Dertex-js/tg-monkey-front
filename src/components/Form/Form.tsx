import { useTelegram } from 'hooks'
import React, { useCallback, useEffect, useState } from 'react'

import { CustomInput, CustomSelect } from 'UI'
import { CustomOptionValue, OptionItem } from 'UI/Select/types'

import cl from './style.module.scss'

const Form = () => {
	const options: OptionItem[] = [
		{ value: 'legal', text: 'Юр. Лицо' },
		{ value: 'phys', text: 'Физ. Лицо' }
	]

	const [city, setCity] = useState('')
	const [street, setStreet] = useState('')
	const [subject, setSubject] = useState<CustomOptionValue>('')
	const { tg } = useTelegram()

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Отправить данные'
		})
	}, [])

	useEffect(() => {
		if (!city || !street || !subject) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}, [city, street, subject])

	const onChangeCity = useCallback((e: { target: { value: string } }) => {
		setCity(e.target.value.trim())
	}, [])
	const onChangeStreet = useCallback((e: { target: { value: string } }) => {
		setStreet(e.target.value.trim())
	}, [])
	const onChangeSubject = useCallback((value: CustomOptionValue) => {
		setSubject(value)
	}, [])

	return (
		<div className={cl.form}>
			<CustomInput
				type="text"
				placeholder="Город"
				onChange={onChangeCity}
				value={city}
			/>
			<CustomInput
				type="text"
				placeholder="Улица"
				onChange={onChangeStreet}
				value={street}
			/>
			<CustomSelect
				optionItemsList={options}
				value={subject}
				placeholder="Выберите"
				onChange={onChangeSubject}
			/>
		</div>
	)
}

export default Form

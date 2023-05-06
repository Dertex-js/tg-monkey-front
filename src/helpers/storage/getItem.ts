import isPlainObject from 'lodash/isPlainObject'
import Cookies from 'universal-cookie'

import { StorageTypes } from './types'

type GetItemFromCookies = <T>(key: string, defaultValue: T) => T
const getItemFromCookies: GetItemFromCookies = (key: string, defaultValue) => {
	const cookies = new Cookies()
	const value = cookies.get(key)
	if (typeof value === 'string' && isPlainObject(defaultValue)) {
		return defaultValue
	}
	try {
		if (isPlainObject(value)) {
			return value
		}
		if (typeof value === 'string' && typeof defaultValue !== 'string') {
			return JSON.parse(value)
		}
		if (!value) {
			throw new Error()
		}
		return value
	} catch {
		return defaultValue
	}
}

type GetItemFromStorage = <T>(
	key: string,
	defaultValue: T,
	storageType?: StorageTypes
) => T
const getItemFromStorage: GetItemFromStorage = (
	key: string,
	defaultValue,
	storageType = StorageTypes.COOKIES
) => {
	if (storageType === StorageTypes.COOKIES) {
		return getItemFromCookies(key, defaultValue)
	}

	let storage = global.localStorage

	if (storageType === StorageTypes.SESSION_STORAGE) {
		storage = global.sessionStorage
	}

	try {
		const storageData = storage.getItem(key)
		if (!storageData) {
			throw new Error()
		}
		return JSON.parse(storageData)
	} catch {
		return defaultValue
	}
}

export default getItemFromStorage

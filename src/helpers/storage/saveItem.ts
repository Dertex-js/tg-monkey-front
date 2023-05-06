import Cookies, { CookieSetOptions } from 'universal-cookie'

import { StorageTypes } from './types'

interface SaveItemToCookiesParams extends CookieSetOptions {
	storageType?: StorageTypes
}
type SaveItemToCookies = <T>(
	keyPair: [key: string, value: T],
	options?: CookieSetOptions
) => void
const saveItemToCookies: SaveItemToCookies = ([key, value], options) => {
	const {
		maxAge = 1000 * 60 * 60 * 24 * 7,
		path = '/',
		...restOptions
	} = options || {}
	const cookies = new Cookies()

	cookies.set(key, value, { ...restOptions, maxAge, path })
}

type SaveItemToStorage = <T>(
	keyPair: [key: string, value: T],
	params?: SaveItemToCookiesParams
) => void
const saveItemToStorage: SaveItemToStorage = ([key, value], params) => {
	const { storageType = StorageTypes.COOKIES, ...restOptions } = params || {}

	if (storageType === StorageTypes.COOKIES) {
		return saveItemToCookies([key, value], restOptions)
	}

	let storage = localStorage

	if (storageType === StorageTypes.SESSION_STORAGE) {
		storage = sessionStorage
	}

	storage.setItem(key, JSON.stringify(value))
}

export default saveItemToStorage

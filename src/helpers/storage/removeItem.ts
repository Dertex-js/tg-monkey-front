import Cookies, { CookieSetOptions } from 'universal-cookie'

import { StorageTypes } from './types'

interface RemoveItemFromCookiesParams extends CookieSetOptions {
	storageType?: StorageTypes
}
type RemoveItemFromCookies = (
	names: string[],
	options: CookieSetOptions
) => void
const removeItemFromCookies: RemoveItemFromCookies = (names, options) => {
	const { path = '/', ...restOptions } = options
	const cookies = new Cookies()

	names.forEach((el) => cookies.remove(el, { ...restOptions, path }))
}

type RemoveItemFromStorage = (
	names: string[],
	params?: RemoveItemFromCookiesParams
) => void
const removeItemFromStorage: RemoveItemFromStorage = (names, params) => {
	const { storageType = StorageTypes.COOKIES, ...restOptions } = params || {}

	if (storageType === StorageTypes.COOKIES) {
		return removeItemFromCookies(names, restOptions)
	}
	let storage = localStorage

	if (storageType === StorageTypes.SESSION_STORAGE) {
		storage = sessionStorage
	}

	names.forEach((el) => storage.removeItem(el))
}

export default removeItemFromStorage

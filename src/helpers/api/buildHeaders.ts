import isPlainObject from 'lodash/isPlainObject'
import { StorageKeys } from 'types'

import { ResponseQueryParams } from '../getQueryParams'
import { getItemFromStorage } from '../storage'
import { StorageTypes } from '../storage/types'
import { ResponseBody } from './getResponse'

export interface ResponseParams extends Omit<RequestInit, 'body'> {
	query?: ResponseQueryParams
	needAuth?: boolean
}

type BuildHeaders = (
	params?: Pick<ResponseParams, 'headers' | 'needAuth'>,
	body?: ResponseBody
) => {}

const buildHeaders: BuildHeaders = (params, body) => {
	const token =
		getItemFromStorage(StorageKeys.TOKEN, '') ||
		getItemFromStorage(StorageKeys.TOKEN, '', StorageTypes.SESSION_STORAGE)

	const bodyIsJSON = isPlainObject(body)
	const baseHeaders = {
		...(bodyIsJSON ? { 'Content-Type': 'application/json' } : {}),
		Authorization: params?.needAuth ? `Bearer ${token}` : ''
	}

	return {
		...baseHeaders,
		...(params?.headers || {})
	}
}

export default buildHeaders

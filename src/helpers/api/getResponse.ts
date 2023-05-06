import isPlainObject from 'lodash/isPlainObject'
import { Constants } from 'types'

import buildHeaders, { ResponseParams } from './buildHeaders'

export type ResponseBody = FormData | object | null
const getResponse = async <T>(
	apiUrl: string,
	body?: ResponseBody,
	params?: ResponseParams
): Promise<T> => {
	const bodyIsJSON = isPlainObject(body)

	const response = await fetch(`${Constants.API_BASE_URL}/${apiUrl}`, {
		method: params?.method || (body ? 'POST' : 'GET'),
		body: bodyIsJSON ? JSON.stringify(body) : (body as FormData | undefined),
		headers: buildHeaders(params, body)
	})

	const data = await response.json()
	if (!response.ok) {
		throw new Error(data.message)
	}

	return data
}

export default getResponse

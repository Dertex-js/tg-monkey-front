export interface ResponseQueryParams {
	[key: string]: string | number | boolean
}

type GetQueryParams = <T extends ResponseQueryParams>() => T

const getQueryParams: GetQueryParams = <T extends ResponseQueryParams>(): T => {
	if (!window?.location?.search) {
		// console.error('window.location.search отсутствует')
		return {} as T
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [url, paramsString] = window.location.search.split('?')
	return paramsString.split('&').reduce((queryParamsAccum, paramString) => {
		const [key, value] = paramString.split('=')
		let parsedValue
		try {
			parsedValue = JSON.parse(value)
		} catch {
			parsedValue = value
		}
		return { ...queryParamsAccum, [key]: parsedValue }
	}, {}) as T
}

export default getQueryParams

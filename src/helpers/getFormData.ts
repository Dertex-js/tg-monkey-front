import { isNil } from 'lodash'

import { getFileWithoutId } from './files'

type GetFormData = (data: Record<string, any>) => Promise<FormData>
const getFormData: GetFormData = async (data) => {
	const dt = new FormData()
	await Promise.all(
		Object.entries(data).map(async ([key, value]) => {
			if (isNil(value)) {
				return false
			}
			if (Object.getPrototypeOf(value) === File.prototype) {
				const file = await getFileWithoutId(value)
				if (!file) {
					return false
				}
				dt.append(key, file)
				return true
			}
			dt.append(key, value)
			return true
		})
	)
	return dt
}

export default getFormData

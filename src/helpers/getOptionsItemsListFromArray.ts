import { OptionItem } from 'UI/Select/types'

type GetOptionsItemsListFromArray = (
	array: (string | number)[],
	valueIsText?: boolean
) => OptionItem[]

export const getOptionsItemsListFromArray: GetOptionsItemsListFromArray = (
	array,
	valueIsText = false
) =>
	array.map((text, index) => ({
		text: `${text}`,
		value: valueIsText ? text : index
	}))

export default getOptionsItemsListFromArray

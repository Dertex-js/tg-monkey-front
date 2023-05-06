type ToCapitalize = (str: string) => string

const toCapitalize: ToCapitalize = (str) =>
	`${str.slice(0, 1).toUpperCase()}${str.slice(1)}`

export default toCapitalize

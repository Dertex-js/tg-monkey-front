type GetUniqueId = (factor?: string | number) => string

const getUniqueId: GetUniqueId = (factor) =>
	`${Math.random()}-${factor || Math.random()}`

export default getUniqueId

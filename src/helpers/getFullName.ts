interface GetFullNameParams {
	firstName?: string
	lastName?: string
}

type GetFullName = (params: GetFullNameParams) => string

const getFullName: GetFullName = ({ firstName, lastName }) =>
	`${firstName || ''} ${lastName || ''}`.trim()

export default getFullName

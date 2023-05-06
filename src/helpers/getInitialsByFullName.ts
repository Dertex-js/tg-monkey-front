type GetInitialsByFullName = (firstName?: string, lastName?: string) => string

const getInitialsByFullName: GetInitialsByFullName = (
	firstName = '',
	lastName = ''
) => `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase() || 'EMPTY'

export default getInitialsByFullName

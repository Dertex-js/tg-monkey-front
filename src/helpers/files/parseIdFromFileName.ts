import { FileId } from 'types'

type ParseIdFromFileName = (fileName: string) => [FileId, string]

const parseIdFromFileName: ParseIdFromFileName = (fileName) => {
	const [name = '', id = ''] = fileName.split('/')

	return [id, name]
}

export default parseIdFromFileName

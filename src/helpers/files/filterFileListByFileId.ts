import { FileId } from 'types'

import getUniqueId from '../getUniqueId'
import getImageUrlFromFile from './getImageUrlFromFile'
import parseIdFromFileName from './parseIdFromFileName'

type FilterFileListByFileId = (
	files: File[],
	fileId: FileId[] | FileId
) => Promise<FileList>

const filterFileListByFileId: FilterFileListByFileId = async (
	files,
	fileId
) => {
	const dt = new DataTransfer()
	if (!files.length) {
		return dt.files
	}

	await Promise.all(
		files.map(async (file) => {
			const url = await getImageUrlFromFile(file)
			if (!url) {
				return false
			}

			const [id, name] = parseIdFromFileName(file.name)

			if (fileId.includes(id) || fileId === id) {
				return false
			}

			dt.items.add(
				new File([url], id ? file.name : `${name}/${getUniqueId()}`, {
					type: file.type
				})
			)

			return true
		})
	)

	return dt.files
}

export default filterFileListByFileId

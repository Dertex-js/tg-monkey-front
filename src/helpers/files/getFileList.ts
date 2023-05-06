import getUniqueId from '../getUniqueId'
import getImageUrlFromFile from './getImageUrlFromFile'
import parseIdFromFileName from './parseIdFromFileName'

type GetFileList = (files: File[]) => Promise<FileList>

const getFileList: GetFileList = async (files) => {
	const dt = new DataTransfer()

	await Promise.all(
		files.map(async (file) => {
			const url = await getImageUrlFromFile(file)
			if (!url) {
				return false
			}

			const [id, name] = parseIdFromFileName(file.name)

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

export default getFileList

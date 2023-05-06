import { getUniqueId } from '../index'

type FilterFileListInfoByFileUrl = (
	filesUrlList: string[],
	fileName: string[] | string
) => Promise<FileList>

const filterFileListInfoByFileUrl: FilterFileListInfoByFileUrl = async (
	filesUrlList,
	fileUrl
) => {
	const dt = new DataTransfer()

	if (!filesUrlList.length) {
		return dt.files
	}

	await Promise.all(
		filesUrlList.map(async (fileUrlInfo) => {
			if (!fileUrlInfo) {
				return false
			}

			if (fileUrl.includes(fileUrlInfo) || fileUrl === fileUrlInfo) {
				return false
			}

			dt.items.add(new File([fileUrlInfo], `${fileUrlInfo}${getUniqueId()}`))

			return true
		})
	)

	return dt.files
}

export default filterFileListInfoByFileUrl

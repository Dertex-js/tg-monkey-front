type GetImageUrlFromFile = (file?: File) => Promise<string | ArrayBuffer | null>

const getImageUrlFromFile: GetImageUrlFromFile = async (file) => {
	if (!file) {
		return ''
	}

	const fileReader = new FileReader()

	fileReader.readAsArrayBuffer(file)

	return new Promise((resolve) => {
		fileReader.onloadend = () => resolve(fileReader.result)
	})
}

export default getImageUrlFromFile

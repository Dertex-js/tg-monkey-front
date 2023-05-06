type ClearFileInput = (fileInput: HTMLInputElement) => void

const clearFileInput: ClearFileInput = (fileInput) => {
	if (!fileInput.files?.length) {
		return
	}

	const dt = new DataTransfer()
	fileInput.files = dt.files
}

export default clearFileInput

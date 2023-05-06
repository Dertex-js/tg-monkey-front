import { useEffect } from 'react'

const useDisableWindowScroll = (disable: boolean) => {
	useEffect(() => {
		if (disable) {
			document.body.style.overflowY = 'hidden'
			return
		}

		document.body.style.overflowY = 'auto'

		return () => {
			document.body.style.overflowY = 'auto'
		}
	}, [disable])
}

export default useDisableWindowScroll

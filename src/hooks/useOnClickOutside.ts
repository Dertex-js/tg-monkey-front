import { RefObject, useCallback, useEffect } from 'react'

const UseOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (event: Event) => void
) => {
	const handlerCallback = useCallback(handler.bind(null), [])

	useEffect(() => {
		const listener = (event: Event) => {
			const element = ref.current
			if (!element || element.contains((event.target as Node) || null)) {
				return
			}

			handlerCallback(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [ref, handlerCallback])
}

export default UseOnClickOutside

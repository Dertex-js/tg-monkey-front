import { useLayoutEffect, useState } from 'react'

enum Queries {
	isMobileMiddle = '475',
	isMobile = '768',
	isTablet = '992',
	isTable = '1060'
}

const useMatchMedia = (): { [screen: string]: boolean } => {
	const mediaQueryLists = Object.values(Queries).map((query) =>
		matchMedia(`(max-width: ${query}px)`)
	)

	const getValues = () => mediaQueryLists.map((mql) => mql.matches)

	const [values, setValues] = useState(getValues)

	useLayoutEffect(() => {
		const handler = () => setValues(getValues)

		mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler))
		return () => {
			mediaQueryLists.forEach((mql) =>
				mql.removeEventListener('change', handler)
			)
		}
	}, [])
	return Object.keys(Queries).reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: values[index]
		}),
		{}
	)
}

export default useMatchMedia

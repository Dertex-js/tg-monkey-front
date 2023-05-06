type GetAmountDaysByMonth = (year: number, month: number) => number

const getAmountDaysByMonth: GetAmountDaysByMonth = (year, month) =>
	new Date(year, month + 1, 0).getDate()

export default getAmountDaysByMonth

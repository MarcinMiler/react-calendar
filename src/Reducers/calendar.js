import dayjs from 'dayjs'

const startOfMonth = dayjs()
	.startOf('month')
	.startOf('week')

const endOfMonth = dayjs().endOf('month')

const generateMonthCalendar = (start, end) => {
	console.log(start.format('DD MMM YYYY'))
	console.log(end.format('DD MMM YYYY'))
	let calendar = []

	const condition = end.diff(start, 'day')

	for (let i = 1; i <= condition; i++) {
		calendar.push({ day: start.add(i, 'day').format('DD') })
	}

	return calendar
}

const currentMonth = generateMonthCalendar(startOfMonth, endOfMonth)

const initialState = {
	index: 0,
	monthName: dayjs().format('MMMM YYYY'),
	currentMonth
}

export const calendar = (state = initialState, action) => {
	switch (action.type) {
		case 'NEXT_MONTH':
			let index = state.index + 1

			const updatedStartMonth = dayjs()
				.startOf('month')
				.add(index, 'month')
				.startOf('week')

			const updatedEndMonth = dayjs()
				.add(index, 'month')
				.add(1, 'day')
				.endOf('month')
				.endOf('week')

			const generated = generateMonthCalendar(
				updatedStartMonth,
				updatedEndMonth
			)

			return {
				currentMonth: generated,
				index,
				monthName: dayjs()
					.add(index, 'month')
					.format('MMMM YYYY')
			}
		default:
			return state
	}
}

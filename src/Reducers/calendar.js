import dayjs from 'dayjs'

const startOfMonth = dayjs()
    .startOf('month')
    .startOf('week')

const endOfMonth = dayjs()
    .endOf('month')
    .endOf('week')
    .add(1, 'day')

const generateMonthCalendar = (start, end) => {
    let calendar = []

    const condition = end.diff(start, 'day')

    for (let i = 1; i <= condition; i++) {
        calendar.push({ day: start.add(i, 'day').format('DD') })
    }

    return calendar
}

const currentMonth = generateMonthCalendar(startOfMonth, endOfMonth)

const initialState = {
    currentMonth
}

export const calendar = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

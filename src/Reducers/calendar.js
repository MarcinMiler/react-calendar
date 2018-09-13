import moment from 'moment'

const generateCalendar = index => {
    const month = moment().add(index, 'month')
    const start = moment()
        .add(index, 'month')
        .startOf('month')
        .startOf('isoWeek')

    const end = moment()
        .add(index, 'month')
        .endOf('month')
        .endOf('isoWeek')

    const diff = end.diff(start, 'days')

    let calendar = []

    for (let i = 0; i <= diff; i++) {
        const clonedStart = start.clone()
        const calculatedDay = clonedStart.add(i, 'day')

        calendar.push({
            isPartOfMonth: month.isSame(calculatedDay, 'month'),
            day: calculatedDay.format('DD'),
            date: calculatedDay,
            reminders: []
        })
    }
    return calendar
}

const getMonthName = index =>
    moment()
        .add(index, 'month')
        .format('MMMM YYYY')

const initialState = {
    monthName: getMonthName(0),
    index: 0,
    allMonths: { 0: generateCalendar(0) }
}

const updateAllMonths = (state, index) =>
    state.allMonths[index]
        ? state.allMonths
        : { ...state.allMonths, [index]: generateCalendar(index) }

export const calendar = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_MONTH': {
            let index = state.index + 1

            const updatedAllMonths = updateAllMonths(state, index)

            return {
                index,
                monthName: getMonthName(index),
                allMonths: updatedAllMonths
            }
        }

        case 'PREV_MONTH': {
            let index = state.index - 1

            const updatedAllMonths = updateAllMonths(state, index)

            return {
                index,
                monthName: getMonthName(index),
                allMonths: updatedAllMonths
            }
        }

        case 'ADD_REMINDER': {
            let diff = moment()
                .startOf('month')
                .diff(action.date, 'months')

            diff = -diff

            if (state.allMonths[diff]) {
                const newState = state.allMonths[diff].map(day => {
                    if (moment(action.date).isSame(day.date)) {
                        const { date, time, name } = action
                        day.reminders.push({ date, time, name })
                    }
                    return day
                })

                return {
                    ...state,
                    allMonths: { ...state.allMonths, [diff]: newState }
                }
            } else {
                const updatedAllMonths = updateAllMonths(state, diff)

                const newState = updatedAllMonths[diff].map(day => {
                    if (moment(action.date).isSame(day.date)) {
                        const { date, time, name } = action
                        day.reminders.push({ date, time, name })
                    }
                    return day
                })

                return {
                    ...state,
                    allMonths: { ...state.allMonths, [diff]: newState }
                }
            }
        }

        default:
            return state
    }
}

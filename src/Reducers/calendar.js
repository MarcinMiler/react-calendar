import moment from 'moment'

const generateCalendar = index => {
    console.log(index)
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
            day: calculatedDay.format('DD')
        })
    }
    return calendar
}

const getMonthName = index =>
    moment()
        .add(index, 'month')
        .format('MMMM YYYY')

const currentMonth = generateCalendar(0)

const initialState = {
    monthName: getMonthName(0),
    index: 0,
    currentMonth,
    allMonths: { 0: currentMonth }
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
                allMonths: updatedAllMonths,
                currentMonth: updatedAllMonths[index]
            }
        }

        case 'PREV_MONTH': {
            let index = state.index - 1

            const updatedAllMonths = updateAllMonths(state, index)

            return {
                index,
                monthName: getMonthName(index),
                allMonths: updatedAllMonths,
                currentMonth: updatedAllMonths[index]
            }
        }

        default:
            return state
    }
}

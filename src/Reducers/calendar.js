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
            day: calculatedDay.format('DD')
        })
    }
    return calendar
}

const initialState = {
    monthName: moment().format('MMMM'),
    index: 0,
    currentMonth: generateCalendar(0)
}

export const calendar = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_MONTH': {
            let index = state.index + 1

            return {
                index,
                monthName: moment()
                    .add(index, 'month')
                    .format('MMMM'),
                currentMonth: generateCalendar(index)
            }
        }

        case 'PREV_MONTH': {
            let index = state.index - 1

            return {
                index,
                monthName: moment()
                    .add(index, 'month')
                    .format('MMMM'),
                currentMonth: generateCalendar(index)
            }
        }

        default:
            return state
    }
}

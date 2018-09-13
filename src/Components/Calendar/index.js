import { connect } from 'react-redux'

import { CalendarView } from './CalendarView'

const mapStateToProps = state => ({
    currentMonth: state.calendar.allMonths[state.calendar.index]
})

export const Calendar = connect(mapStateToProps)(CalendarView)

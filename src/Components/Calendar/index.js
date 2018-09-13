import { connect } from 'react-redux'

import { deleteReminder } from '../../Actions'
import { CalendarView } from './CalendarView'

const mapStateToProps = state => ({
    currentMonth: state.calendar.allMonths[state.calendar.index]
})

const mapDisptachToProps = {
    deleteReminder
}

export const Calendar = connect(
    mapStateToProps,
    mapDisptachToProps
)(CalendarView)

import { connect } from 'react-redux'

import { prevMonth, nextMonth } from '../../Actions'
import { CalendarHeaderView } from './CalendarHeaderView'

const mapStateToProps = state => ({
    monthName: state.calendar.monthName
})
const mapDistpachToProps = {
    prevMonth,
    nextMonth
}

export const CalendarHeader = connect(
    mapStateToProps,
    mapDistpachToProps
)(CalendarHeaderView)

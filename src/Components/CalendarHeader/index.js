import { connect } from 'react-redux'

import { nextMonth } from '../../Actions'
import { CalendarHeaderView } from './CalendarHeaderView'

const mapStateToProps = state => ({
	monthName: state.calendar.monthName
})
const mapDistpachToProps = {
	nextMonth
}

export const CalendarHeader = connect(
	mapStateToProps,
	mapDistpachToProps
)(CalendarHeaderView)

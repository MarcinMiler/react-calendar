import React from 'react'
import { connect } from 'react-redux'

import { CalendarView } from './CalendarView'

const mapStateToProps = state => ({
    currentMonth: state.calendar.currentMonth
})

export const Calendar = connect(mapStateToProps)(CalendarView)

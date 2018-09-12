import React from 'react'

import { CalendarHeader } from '../../Components/CalendarHeader'
import { Calendar } from '../../Components/Calendar'
import { ReminderForm } from '../../Components/ReminderForm'

export class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CalendarHeader />
                <Calendar />
                <ReminderForm />
            </React.Fragment>
        )
    }
}

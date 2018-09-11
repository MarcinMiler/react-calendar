import React from 'react'
import moment from 'moment'

import { CalendarHeader } from '../../Components/CalendarHeader'
import { Calendar } from '../../Components/Calendar'

export class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CalendarHeader />
                <Calendar />
            </React.Fragment>
        )
    }
}

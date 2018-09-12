import React from 'react'

import { ReminderFormView } from './ReminderFormView'

export class ReminderForm extends React.Component {
    state = {
        name: '',
        date: '',
        time: ''
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    render() {
        return <ReminderFormView changeState={this.handleChangeState} />
    }
}

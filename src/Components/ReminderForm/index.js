import React from 'react'
import { connect } from 'react-redux'

import { ReminderFormView } from './ReminderFormView'
import { addReminder } from '../../Actions'

class C extends React.Component {
    state = {
        name: '',
        date: '',
        time: ''
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    addReminder = () => {
        const { name, date, time } = this.state
        this.props.addReminder(name, date, time)
    }

    render() {
        return (
            <ReminderFormView
                changeState={this.handleChangeState}
                addReminder={this.addReminder}
            />
        )
    }
}

const mapDispatchToProps = {
    addReminder
}

export const ReminderForm = connect(
    null,
    mapDispatchToProps
)(C)

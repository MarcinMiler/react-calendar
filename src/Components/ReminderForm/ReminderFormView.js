import React from 'react'

import { Container, Row, StyledInput, Button } from './style'

export const ReminderFormView = ({ changeState, addReminder }) => (
    <Container>
        <Row>
            <StyledInput onChange={e => changeState('name', e.target.value)} />
            <StyledInput
                onChange={e => changeState('date', e.target.value)}
                type="date"
            />
            <StyledInput
                onChange={e => changeState('time', e.target.value)}
                type="time"
            />
        </Row>
        <Button onClick={addReminder}>Save</Button>
    </Container>
)

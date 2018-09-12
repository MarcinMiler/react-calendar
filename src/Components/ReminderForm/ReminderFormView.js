import React from 'react'

import { Container, Row, StyledInput, Button } from './style'

export const ReminderFormView = ({ changeState }) => (
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
        <Button>Save</Button>
    </Container>
)

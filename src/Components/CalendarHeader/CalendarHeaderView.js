import React from 'react'

import { Container, CurrentMonth, LeftArrow, RightArrow } from './style'

export const CalendarHeaderView = ({ prevMonth, nextMonth, monthName }) => (
    <Container>
        <LeftArrow onClick={prevMonth} />
        <CurrentMonth>{monthName}</CurrentMonth>
        <RightArrow onClick={nextMonth} />
    </Container>
)

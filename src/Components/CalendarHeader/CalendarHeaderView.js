import React from 'react'

import { Container, CurrentMonth, LeftArrow, RightArrow } from './style'

export const CalendarHeaderView = () => (
    <Container>
        <LeftArrow />
        <CurrentMonth>Semptember</CurrentMonth>
        <RightArrow />
    </Container>
)

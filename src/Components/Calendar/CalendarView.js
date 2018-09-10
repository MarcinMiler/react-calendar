import React from 'react'
import {
    Container,
    Legend,
    LegendItem,
    MonthGrid,
    MonthGridItem
} from './style'

export const CalendarView = ({ currentMonth }) => (
    <Container>
        <Legend>
            <LegendItem>Monday</LegendItem>
            <LegendItem>Tuesday</LegendItem>
            <LegendItem>Wednesday</LegendItem>
            <LegendItem>Thursday</LegendItem>
            <LegendItem>Friday</LegendItem>
            <LegendItem>Saturday</LegendItem>
            <LegendItem>Sunday</LegendItem>
        </Legend>
        <MonthGrid>
            {currentMonth.map(day => (
                <MonthGridItem>{day.day}</MonthGridItem>
            ))}
        </MonthGrid>
    </Container>
)

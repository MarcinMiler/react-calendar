import React from 'react'
import {
    Container,
    Legend,
    LegendItem,
    MonthGrid,
    MonthGridItem,
    Reminder,
    CloseIcon
} from './style'

export const CalendarView = ({ currentMonth, deleteReminder }) => (
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
            {currentMonth.map((day, i) => (
                <MonthGridItem key={i} disabled={!day.isPartOfMonth}>
                    {day.day}
                    {day.reminders.length > 0 &&
                        day.reminders.map((reminder, i) => (
                            <Reminder key={i}>
                                {reminder.text}
                                <CloseIcon
                                    onClick={() => deleteReminder(reminder.id)}
                                />
                            </Reminder>
                        ))}
                </MonthGridItem>
            ))}
        </MonthGrid>
    </Container>
)

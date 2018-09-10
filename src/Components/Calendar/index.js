import React from 'react'
import {
    Container,
    Legend,
    LegendItem,
    MonthGrid,
    MonthGridItem
} from './style'

export const Calendar = () => (
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
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
            <MonthGridItem />
        </MonthGrid>
    </Container>
)

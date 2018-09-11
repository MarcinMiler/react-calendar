import React from 'react'

import { Container, CurrentMonth, LeftArrow, RightArrow } from './style'

export const CalendarHeaderView = ({ nextMonth, monthName }) => (
	<Container>
		<LeftArrow />
		<CurrentMonth>{monthName}</CurrentMonth>
		<RightArrow onClick={nextMonth} />
	</Container>
)

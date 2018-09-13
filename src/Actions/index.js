export const prevMonth = () => ({
    type: 'PREV_MONTH'
})

export const nextMonth = () => ({
    type: 'NEXT_MONTH'
})

export const addReminder = (text, date, time) => ({
    type: 'ADD_REMINDER',
    text,
    date,
    time
})

export const deleteReminder = id => ({
    type: 'DELETE_REMINDER',
    id
})

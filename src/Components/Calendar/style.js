import styled from 'styled-components'

import { MdClose } from 'react-icons/md'

export const Container = styled.div`
    width: 100%;
    height: 80%;
    border-radius: 4px;
    background: white;
    box-shadow: 5px 5px 20px lightgray;
`
export const Legend = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid lightgray;
    background: white;
`
export const LegendItem = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: gray;
`
export const MonthGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: white;
`
export const MonthGridItem = styled.div`
    width: 100%;
    min-height: 120px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: ${p => (p.disabled ? '#e5e5e5' : 'white')};
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    font-weight: 500;
    color: gray;
    box-sizing: border-box;
`
export const Reminder = styled.div`
    width: 100%;
    min-height: 30px;
    margin-top: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    border-left: 3px solid #ff5e7d;
    background-color: #ffc4cf;
    color: #ff5e7d;
    box-sizing: border-box;
`
export const CloseIcon = styled(MdClose)`
    font-size: 18px;
    color: #ff5e7d;
    cursor: pointer;
`

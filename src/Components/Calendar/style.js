import styled from 'styled-components'

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
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    font-weight: 500;
    color: gray;
`

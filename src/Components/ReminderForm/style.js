import styled from 'styled-components'

export const Container = styled.div`
    width: 400px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Row = styled.div`
    display: flex;
`
export const StyledInput = styled.input``
export const Button = styled.div`
    width: 130px;
    height: 40px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #ff5e7d;
    font-weight: 500;
    color: white;
    box-shadow: 0px 0px 15px lightgray;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 3px 15px gray;
    }
`

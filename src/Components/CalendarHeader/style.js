import styled from 'styled-components'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const Container = styled.div`
    width: 50%;
    margin: auto;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CurrentMonth = styled.div`
    font-size: 32px;
    font-weight: 500;
    user-select: none;
`
export const LeftArrow = styled(MdKeyboardArrowLeft)`
    border-radius: 50%;
    font-size: 32px;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 15px lightgray;
    }
`
export const RightArrow = styled(MdKeyboardArrowRight)`
    border-radius: 50%;
    font-size: 32px;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 15px lightgray;
    }
`

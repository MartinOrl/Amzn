import styled, { css } from 'styled-components';

export const PaymentContainer = styled.div`
    background: white;
`

export const Container = styled.div`
    h1{
        text-align: center;
        padding: 10px;
        font-weight: 400;
        background-color: rgb(234,237,237);
        border-bottom: 1px solid lightgray;
        a{
            text-decoration: none;
        }
    }
`

const SectionStyle = css`
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid lightgray;
`

export const DeliveryAddress = styled.div`
    ${SectionStyle}
`

export const Items = styled.div`
    ${SectionStyle}
`

export const Title = styled.h3`
`

export const PaymentOption = styled.div`
    ${SectionStyle};
    align-items: center;
    div, ${DeliveryAddress}, div div{
        flex: 0.8;
    }
`


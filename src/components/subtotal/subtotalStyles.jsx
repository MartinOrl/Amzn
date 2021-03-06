import styled from 'styled-components';

export const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 3px;
`

export const SubtotalGift = styled.small`
    display: flex;
    align-items: center;
    input{
        margin-right: 5px;
    }
`

export const Button = styled.button`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 45px;
    padding: 8px 0;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    &:hover{
        cursor: pointer;
    }
`
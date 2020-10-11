import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 1;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
`

export const ProductInfo = styled.div`
    height: 100px;
    margin-bottom: 15px;
`

export const Title = styled.p`

`

export const Price = styled.p`
    margin-top: 5px;
`

export const Rating = styled.div`
    display: flex;
`

export const Image = styled.img`
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
`

export const Button = styled.button`
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`
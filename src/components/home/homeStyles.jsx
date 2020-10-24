import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1640px;
`

export const Container = styled.div`

`

export const HomeImage = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -160px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    @media screen and (max-width: 870px){
        margin-bottom: -80px;
    }
`

export const Row = styled.div`
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
    @media screen and (max-width: 870px){
        flex-direction: column;
    }
`
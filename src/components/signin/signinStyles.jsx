import styled, {css} from 'styled-components';

const defaultStyle = css`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
`

const registerStyle = css`
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid darkgray;
    margin-top: 10px;
`

const getStyle = ({register}) => {
    if(register){
        return registerStyle
    }
    return defaultStyle
}

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: white;
`

export const Image = styled.img`
    margin: 20px auto;
    object-fit: contain;
    width: 100px;
`

export const FormContainer = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
    h1{
        font-weight: 500;
        margin-bottom: 20px;
    }
    p{
        margin-top: 15px;
        font-size: 0.9rem;
    }
`

export const Form = styled.form`
    h5{
        margin-bottom: 5px;
    }
`

export const Input = styled.input`
    margin-bottom: 10px;
    background-color: white;
    padding: 8px 16px;
    width: 90%;
`

export const Button = styled.button`
    ${getStyle}
`
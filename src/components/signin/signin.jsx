import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../../firebase/firebase'

import { SignInContainer, Image, FormContainer, Form, Input, Button } from './signinStyles.jsx';

const SignIn = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <SignInContainer>
            <Link to ='/'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='logo, amazon logo' />
            </Link>
            <FormContainer>
                <h1>Sign In</h1>
                <Form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <Input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <h5>Password</h5>
                    <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    <Button type='submit' >Sign In</Button>
                </Form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Button register onClick={register} >Create Your Amazon Account</Button>
            </FormContainer>

        </SignInContainer>
    )
};
    

export default SignIn;    
    
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: rgba(219, 233, 245, 0.866);
    border-radius: 20px;
    box-shadow: 1px 1px 28px 2px rgba(128,185,234,0.93);
-webkit-box-shadow: 1px 1px 28px 2px rgba(128,185,234,0.93);
-moz-box-shadow: 1px 1px 28px 2px rgba(128,185,234,0.93);
${mobile({ width: "75%" })}

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    border: none;
    border-bottom: 0.5px solid lightgray;
    outline: none;
    background-color: inherit;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    outline: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-self: center;
    justify-content: center;
    border-radius: 10px;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email" />
                    <Input type='password' placeholder="Password" />
                    <Input type='password' placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I confirm that I am at least 13 years of age and have read and agree to the Terms of Service a <b>PRIVACY POLICY</b>

                    </Agreement>
                    <Button>REGISTER</Button>
                </Form>

            </Wrapper>
        </Container>
    );
}

export default Register;

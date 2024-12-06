import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
height: 60px;
${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding:"10px 0"})}

`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}

`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
border-radius: 20px;
`;

const Input = styled.input`
border: none;
outline:none;
${mobile({width:"50px"})}

`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
${mobile({fontSize:"24px"})}

`


const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:"2",justifyContent:"center"})}

`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <i className="fa-solid fa-magnifying-glass" style={{color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>FLIFT.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <div className="cart" style={{ position: "relative", display: "inline-block" }}>
                            <i className="fa-solid fa-cart-shopping" />
                            <span className="button__badge" style={{
                                position: "absolute", top: "-8px", right: "-8px", backgroundColor: " #fa3e3e", border: "3px", borderRadius: "50%", color: "white",
                                padding: "1px 3px",
                                fontSize: "10px"
                            }}>4</span>
                        </div>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;

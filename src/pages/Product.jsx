import React from 'react';
import styled from 'styled-components';
import { Announcement, Footer, Navbar, Newsletter } from '../components/indexComp';
import { mobile } from '../responsive';


//************************STYLE********************************** 

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 70%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    ${mobile({ width: "100%" })}
`
const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
`
const Icon = styled.i`
    margin: 12px ;
    padding: 15px;
    width: 108px;
    height: 18px;
    transition: all 0.5s ease;
    display:flex ;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    bottom: 20%;
    background-color: #c6d8fe;
    border-radius: 20px;

    &:hover{
        background-color: #f1b793;
        border-radius: 20px;
    }
    ${mobile({ width: "108px", height: "40px", padding: "10px" })} /* Adjust icon size for mobile */
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;    
    
    &:hover{
        background-color: #f8f4f4;
    }
`;



//************************ARRANGEMENT & CODING**********************************
const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jeans.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <i className="fa-solid fa-minus" />
                            <Amount>1</Amount>
                            <i className="fa-solid fa-add" />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                        <Icon>
                            <i className="fas fa-eye">Try on</i>
                        </Icon>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default Product;

import React from 'react';
import ProductItem from './ProductItem';
import styled from "styled-components";
import { popularProducts } from '../data';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {
                popularProducts.map((item) => (
                    <ProductItem item={item} key={item.id} />
                ))
            }
        </Container>
    );
}

export default Products;

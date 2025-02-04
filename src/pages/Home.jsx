import React from 'react';
import { Announcement, Categories, Footer, Navbar, Newsletter, Products, Slider } from "../components/indexComp"


const Home = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;

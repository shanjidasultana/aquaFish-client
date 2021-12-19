import React from 'react';
import Banner from '../Banner/Banner';
import BottomBanner from '../Banner/BottomBanner';
import Blogs from '../Blogs/Blogs';
import Fishes from '../Fishes/Fishes';
import Footer from '../Footer/Footer';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BottomBanner></BottomBanner>

            <Services></Services>
            <Fishes></Fishes>
            <Offer></Offer>
            <Blogs></Blogs>
            <Footer></Footer>

        </div>
    );
};

export default Home;
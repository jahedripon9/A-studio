import React from 'react';
import Navbars from '../../Navbars/Navbars'
import Banner from '../Banner/Banner';
import BusinessPlan from '../BusinessPlan/BusinessPlan';
import OurClient from '../OurClient/OurClient';

const Home = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Banner></Banner>
            <OurClient></OurClient>
            <BusinessPlan></BusinessPlan>
        </div>
    );
};

export default Home;
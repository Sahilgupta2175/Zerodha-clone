import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return (
        <>
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;
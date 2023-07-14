import React from 'react';

//components
import Navbar from '../components/Navbar/navbar.component';
import HeroCaraousal from '../components/HeroCarousal/HeroCarousal.component';

function DefaultLayout (props){
    return(
        <>
        <Navbar />
        <HeroCaraousal />
        {props.element}
        </>
    )
}
export default DefaultLayout;
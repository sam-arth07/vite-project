import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const HomePage=()=> {
    return (
        <>
        <div className="container mx-auto px-40">
        <h1 className="text-2xl font-bold text-textCol-100">The Best of Live Events</h1>
        <EntertainmentCardSlider />
        </div>
        </>
    )
}

export default HomePage;
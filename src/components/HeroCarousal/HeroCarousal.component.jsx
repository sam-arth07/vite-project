import React from 'react';
import HeroSlider from "react-slick";

import { NextArrow,PrevArrow } from './Arrows.component';


const HeroCarousal = () => {
    const settings ={
        arrows:true,
        nextArrow:<NextArrow />,
        prevArrow :<PrevArrow />,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"

    }
    //for auto scrolling
    const settingsLg = {
        centerMode:true,
        centerPadding:"200px",
        arrows:true,
        nextArrow:<NextArrow />,
        prevArrow :<PrevArrow />,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
      };

      //for multiple carousals
    // const settings = {
    //         className: "center",
    //         centerMode: true,
    //         infinite: true,
    //         centerPadding: "60px",
    //         slidesToShow: 3,
    //         speed: 700
    //   };

    //for single carousal
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    // const images = [
    //     'https://e0.pxfuel.com/wallpapers/737/814/desktop-wallpaper-luffys-wanted-poster-traditional-by-xxcookie-freakxx-for-your-mobile-tablet-explore-one-piece-wanted-one-piece-one-piece-luffy-wanted-poster.jpg',
    //     'https://img.fruugo.com/product/5/16/191489165_max.jpg',
    //     'https://wallpaperaccess.com/full/6355116.png',
    //     'https://wallpaperaccess.com/full/7518563.png',
    //     'https://wallpapercave.com/wp/wp11656431.jpg',
    //     'https://www.thenerdcave.com/cdn/shop/products/OP-408usa.jpg?v=1636850709'
    // ]
    const images=[
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1688391268673_fastxdesktop.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1687328911358_webbannernpa.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1688151321325_falgunidesktop.jpg"
    ]
    return(
        <>
        <div className='lg:hidden'>
            <HeroSlider {...settings}>
            {   images.map((image)=>(
                <div className='w-full h-64 md:h-80 py-3'>
                    <img src={image} className='w-full h-full rounded-md' />
                </div>))
            }
            </HeroSlider>
        </div>
        <div className='hidden lg:block'>
            <HeroSlider {...settingsLg}>
            {   images.map((image)=>(
                <div className='w-full h-96 px-2 py-3'>
                    <img src={image} className='w-full h-full rounded-md'/>
                </div>))
            }
            </HeroSlider>
        </div>
        </>
    )
}

export default HeroCarousal;
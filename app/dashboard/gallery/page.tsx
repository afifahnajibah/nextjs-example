"use client"; // for nextjs 13.4 user

import '@/app/ui/global.css'
import '@/app/ui/gallery.css'
import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Gallery () {

    const cards = [
        {
            title: "card 1",
            image: "/customers/amy-burns.png",
            position:"CEO",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "card 2",
            image: "/customers/balazs-orban.png",
            position: "COO",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "card 3",
            image: "/customers/evil-rabbit.png",
            position: "CPU",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "card 4",
            image:"/customers/lee-robinson.png",
            position: "CPR",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "card 5",
            image: "/customers/hector-simpson.png",
            position: "CP",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ]

    const nextArrow = (
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2" >
            <AiOutlineArrowRight/>
        </button>
    )

    const prevArrow = (
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <AiOutlineArrowLeft/>
        </button>
    )

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 4,
        speed: 1000, 
        nextArrow: nextArrow,
        prevArrow: prevArrow,
    };

    

    return (
    <>
    <div className='bg-gray-300 p-10'>
        <Slider {...settings}>
            {cards.map((card) => (
            <>
                <div className="p-5 bg-slate-800 rounded-md text-white font-light"> 
                    <div className='flex flex-col'>
                        <p className='mb-4 border-b-slate-500 border-b-2 pb-3'>{card.description}</p>
                        <div className='flex flex-row items-center justify-between '>
                            <div className='flex flex-row items-center'>
                                <Image src={card.image} alt="" width={40} height={40} className='rounded-full'/>
                                <div className='flex flex-col ml-3'>
                                    <h2 className='uppercase font-bold text-amber-500'>{card.title}</h2>
                                    <h4>{card.position}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            ))} 
        </Slider>
    </div>
    </>
    );
};
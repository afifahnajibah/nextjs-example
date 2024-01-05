"use client"; // for nextjs 13.4 user

import '@/app/ui/global.css'
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const images = [
    '/gallery-1.png',
    '/gallery-4.png',
    '/gallery-5.png',
    '/gallery-1.png',
    '/gallery-5.png',
    '/gallery-4.png',
    '/gallery-1.png',
    '/gallery-5.png',
];

export default function Gallery() {
    const duplicatedImages = [...images, ...images]; //to make the images loop seamlessly, after image 1 straight display image 5
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
    <div className="relative bg-slate-300 overflow-hidden min-h-[200px] rounded-lg">

        <div className="flex transition-transform ease-in-out duration-300" style={{ width: `${images.length * 100}%`, transform: `translateX(-${(currentIndex / images.length) * 100}%)` }}>
            {duplicatedImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 m-5">
                <Image src={image} alt={`Slide ${index + 1}`} width={100} height={100} layout="responsive" />
            </div>
            ))}
        </div>

        <button className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
            <AiOutlineArrowLeft/>
        </button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
            <AiOutlineArrowRight/>
        </button>

    </div>
    );
};


// import "@/app/ui/gallery.css";

// import Link from "next/link";
// import React from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
// import Image from 'next/image';

// export default function Gallery() {

// const filteredItems = [
//     {
//         id: 1,
//         img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: "camera",
//         price: 200,
//     },
//     {
//         id: 2,
//         img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: "Phone",
//         price: 100,
//     },
//     {
//         id: 3,
//         img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: "Laptop",
//         price: 500,
//     },
//     {
//         id: 4,
//         img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: "Headephone",
//         price: 40,
//     },
//     {
//         id: 5,
//         img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: "Keyboard",
//         price: 140,
//     },
//     {
//         id: 6,
//         img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
//         description: "Gaming Mouse",
//         price: 140,
//     },
// ];

// const slideLeft = () => {
//     let slider : HTMLElement | null  = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft - 235;
// };

// const slideRight = () => {
//     let slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + 235;
// };

// return (
// <>
//     <div className="trending">
//         <div className="container bg-slate-700 w-1/2">
//             <div className="title-btns">
//                 <h3></h3>
//                 <div className="btns">
//                     <button title="scroll left" onClick={slideLeft}>
//                         <AiOutlineArrowLeft />
//                     </button>
//                     <button title="scroll right" onClick={slideRight}>
//                         <AiOutlineArrowRight />
//                     </button>
//                 </div>
//             </div>

//             <div className="row-container" id="slider">
//                 {filteredItems.map((item) => (
//                     <div key={item.id} className="row-item">
//                         <Link href={`/`} className="link">
//                             <div className="item-header">
//                                 <Image src="/hero-desktop.png" alt="product" width={700} height={700} />
//                             </div>
//                             <div className="item-description">
//                                 <p>{item.description}</p>
//                                 <p className="item-price">{item.price}$</p>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
// </>
// );
// };

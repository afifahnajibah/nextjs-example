"use client"; // for nextjs 13.4 user

import '@/app/ui/global.css'
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

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

export default function Gallery() {
    const duplicatedCards = [...cards, ...cards]; //to make the images loop seamlessly, after image 1 straight display image 5
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };



    return (
    <div className="relative overflow-hidden rounded-lg p-5">
        <div className="flex justify-center">
            {duplicatedCards.slice(currentIndex, currentIndex + 3).map((card, index) => (
                <div key={index} className="flex-shrink-0 w-1/3 duration-700 ease-in-out">
                    <div className="relative" style={{ marginLeft: index === 1 ? 'auto' : '', marginRight: index === 1 ? 'auto' : '' }}>
                        <div className={`${index === 1 ? 'scale-125' : 'scale-75'} p-5 bg-slate-800 rounded-md text-white font-light relative`}> 
                            <div className='flex flex-col'>
                                <p>{card.description}</p>
                            </div>
                            <div className='flex flex-row border-t-slate-500 border-t-2 justify-evenly pt-3'>
                                <Image src={card.image} alt="" width={60} height={60} className='rounded-full'/>
                                <div className='flex flex-col'>
                                    <h2 className='uppercase font-bold text-amber-500'>{card.title}</h2>
                                    <h4>{card.position}</h4>
                                </div>
                            </div>

                            {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                <Image 
                                    src="/gallery-2.png" 
                                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" 
                                    alt="..."
                                    width={100}
                                    height={100}
                                />
                            </div> */}
                        </div>
                    </div>
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


// export default function Gallery() {
//     const duplicatedImages = [...images, ...images]; //to make the images loop seamlessly, after image 1 straight display image 5
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     return (
//     <div className="relative bg-slate-300 overflow-hidden rounded-lg p-5">
        
//         <div 
//             className="flex justify-center transition-transform ease-in-out duration-300 transform" 
//             // style={{ width: `${images.length * 10}%`, translate: `-${(currentIndex / images.length) * 10}%` }}
//         >
//             {duplicatedImages.slice(currentIndex, currentIndex + 3).map((image, index) => (
//                 <div key={index} className="flex-shrink-0 w-1/3">
//                     <div className="relative" style={{ marginLeft: index === 1 ? 'auto' : '', marginRight: index === 1 ? 'auto' : '' }}>
//                     <Image
//                         src={image}
//                         alt={`Slide ${index + 1}`}
//                         width={100}
//                         height={100}
//                         layout="responsive"
//                         className={`${index === 1 ? 'scale-110' : 'scale-50'} rounded-lg`}
//                     />
//                     {cards.map((card) =>
//                     <>
//                         <div className='border-black border-4'>
//                             <h2>{card.title}</h2>
//                             <p>{card.description}</p>
//                         </div>
//                     </>
//                     )}
                    
//                     </div>
//                 </div>
//             ))}
//         </div>

//         <button className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
//             <AiOutlineArrowLeft/>
//         </button>
//         <button className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
//             <AiOutlineArrowRight/>
//         </button>

//     </div>
//     );
// };
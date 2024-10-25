'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Banner = () => {
    const slides = [
        {
            number: 1,
            src: '/assets/images/banner/1.jpg',
            alt: 'banner1',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
        },
        {
            number: 2,
            src: '/assets/images/banner/2.jpg',
            alt: 'banner2',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
        },
        {
            number: 3,
            src: '/assets/images/banner/3.jpg',
            alt: 'banner3',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
        },
        {
            number: 4,
            src: '/assets/images/banner/4.jpg',
            alt: 'banner4',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
        },
        {
            number: 5,
            src: '/assets/images/banner/5.jpg',
            alt: 'banner5',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Go to the previous slide
    };

    const handleNext = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); // Go to the next slide
    };

    return (
        <div>
            <div className="carousel w-full rounded-lg">
                {slides.map((slide, index) => (
                    <div
                        key={slide.number}
                        className={`carousel-item relative w-full h-[700px] ${index === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.src}
                                width={1080}
                                height={1080}
                                alt={slide.alt}
                                className="w-full h-full brightness-75"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
                        </div>

                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                            <h1>{slide.title}</h1>
                            <p>{slide.desc}</p>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <button
                                className="btn btn-circle"
                                onClick={handlePrev} // Move to the previous slide
                            >
                                ❮
                            </button>
                            <button
                                className="btn btn-circle"
                                onClick={handleNext} // Move to the next slide
                            >
                                ❯
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;

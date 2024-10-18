import Image from 'next/image';
import React from 'react';

const Banner = () => {
    const slides = [
        {
            number: 1,
            src: '/assets/images/banner/1.jpg',
            alt: 'banner1',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
            prev: '#5',
            next: '#2',
        },
        {
            number: 2,
            src: '/assets/images/banner/2.jpg',
            alt: 'banner2',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
            prev: '#1',
            next: '#3',
        },
        {
            number: 3,
            src: '/assets/images/banner/3.jpg',
            alt: 'banner3',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
            prev: '#2',
            next: '#4',
        },
        {
            number: 4,
            src: '/assets/images/banner/4.jpg',
            alt: 'banner4',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
            prev: '#3',
            next: '#5',
        },
        {
            number: 5,
            src: '/assets/images/banner/5.jpg',
            alt: 'banner5',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti, a sapiente dolor nihil ullam quae quibusdam perspiciatis possimus est ad atque exercitationem? Quam, nesciunt.',
            prev: '#4',
            next: '#1',
        },
    ]
    return (
        <div>
            <div className="carousel w-full">
                {
                    slides.map((slide) => (
                        <div key={slide.number} id={slide.number} className="carousel-item relative w-full h-[700px]">
                            <Image src={slide.src} width={1080} height={1080} alt={slide.alt}
                                className="w-full h-full brightness-75" />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                                <h1>{slide.title}</h1>
                                <p>{slide.desc}</p>
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={slide.prev} className="btn btn-circle">❮</a>
                                <a href={slide.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Banner;
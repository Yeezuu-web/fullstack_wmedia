"use client";

import { useRef } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "../../../../styles/sportlight-swiper.css"

// import Swiper core and required modules
import SwiperCore, {
	Autoplay,Navigation,EffectFade
} from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const SportlightSwiper = () => {
	// const swiperRef = useRef<SwiperCore>();

	const swiperOptions = {
		cssMode: true,
		spaceBetween: 60,
		slidesPerView: 4,
		autoplay: {delay: 2000, disableOnInteraction: false },
		loop: true,
		centeredSlides: true,
		grabCursor: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		allowTouchMove: false,
		simulateTouch: false, 
		dir: 'rtl'
	}

	const swiperOptions2 = {
		cssMode: true,
		spaceBetween: 60,
		slidesPerView: 4,
		loop: true,
		centeredSlides: true,
		grabCursor: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		allowTouchMove: false,
		simulateTouch: false, 
		dir: 'ltr'
	}

	const handleRTLNavigation = () => {
		swiperOptions.dir = swiperOptions.dir === 'ltr' ? 'rtl' : 'ltr';
	};

  return (
	<div className='relative w-full h-full flex flex-col'>
		<Swiper {...swiperOptions} className='sportlight_slider__top'>
			<SwiperSlide className='w-1/4 h-2/5'>
				<div className='relative w-full h-4/5'>
					<Image src="/1.jpg" alt='banner' fill className='z-0 object-cover object-center' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='w-1/4 h-2/5'>
				<div className='relative w-full h-4/5'>
					<Image src="/2.jpg" alt='banner' fill className='z-0 object-cover object-center' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='w-1/4 h-2/5'>
				<div className='relative w-full h-4/5'>
					<Image src="/3.png" alt='banner' fill className='z-0 object-cover object-center' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='w-1/4 h-2/5'>
				<div className='relative w-full h-4/5'>
					<Image src="/4.jpg" alt='banner' fill className='z-0 object-cover object-center' />
				</div>
			</SwiperSlide>
		</Swiper>
		<Swiper {...swiperOptions2} className='sportlight_slider__bottom'>
			<SwiperSlide className='w-1/4 h-2/5'>
				<div className='relative w-full h-4/5'>
					<Image src="/5.jpg" alt='banner' fill className='z-0 object-cover object-center' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='w-1/4 h-2/5'>
				<div className='relative w-full h-4/5'>
					<Image src="/6.jpg" alt='banner' fill className='z-0 object-cover object-center' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='w-1/4 h-2/5'>
				<div className='relative w-full h-4/5'>
					<Image src="/7.png" alt='banner' fill className='z-0 object-cover object-center' />
				</div>
			</SwiperSlide>
			<SwiperSlide className='w-1/4 h-2/5'>
				<div className='relative w-full h-4/5'>
					<Image src="/8.png" alt='banner' fill className='z-0 object-cover object-center' />
				</div>
			</SwiperSlide>
		</Swiper>
		<div className="swiper-buttons">
			<div className="swiper-button-prev" onClick={handleRTLNavigation}></div>
			<div className="swiper-button-next" onClick={handleRTLNavigation}></div>
		</div>
		<div className="absolute w-full h-screen -z-10 top-0">
			<Image
				src="/bg-pic.jpg"
				alt="bg-pic"
				fill
				className="object-cover"
			/>
		</div>
		<div className="absolute w-full h-screen -z-[9] top-0 bg-gradient-brand"></div>
	</div>
  );
};

export default SportlightSwiper;
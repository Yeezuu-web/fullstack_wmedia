"use client";

import { useRef } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/effect-fade/effect-fade.min.css"
import "../../../styles/header-swiper.css"

// import Swiper core and required modules
import SwiperCore, {
	Autoplay,Pagination,Navigation,EffectFade
} from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

const MainSwiper = () => {
	const swiperRef = useRef<SwiperCore>();

	const pagination = {
		clickable: true,
		// dynamicBullets: true,
		renderBullet: function (index:number, className: string) {
			return '<span class=\"' + className + '\">' + '</span>';
	}}

	const params = {
		spaceBetween: 0,
		slidesPerView: 1,
		autoplay: {delay: 3000, disableOnInteraction: false },
		loop: true,
		pagination:  pagination,
		navigation: true,
		centeredSlides: true,
		grabCursor: true,
		effect: 'fade',
		onSwiper: (swiper: any) => swiperRef.current = swiper
	}

  return (
	<Swiper {...params} className='hero_slider'>
		<div className='absolute z-[3] w-full h-[24vh] top-[35%] flex flex-col items-center justify-center select-none'>
			<span className='text-white text-6xl 2xl:text-9xl font-bold'>W MEDIA</span>
			<span className='text-white text-xl 2xl:text-2xl font-semibold'>Digital marketing</span>
			<span className='text-white text-xl 2xl:text-2xl font-semibold'>Media - Entertainmant Agency</span>
		</div>
		<SwiperSlide>
			<div className='relative w-full h-screen'>
				<Image src="/banner-4.jpg" alt='banner' fill className='z-0 object-cover object-center' />
				<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className='relative w-full h-screen'>
				<Image src="/banner-3.jpg" alt='banner' fill className='z-0 object-cover object-center' />
				<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
			</div>
		</SwiperSlide>
		<div className='absolute z-[3] w-full h-[120px] bottom-0 flex flex-col items-center justify-center'>
			<h3 className='absolute text-red-500 -top-8 text-lg'>Scroll</h3>
			<div className="line"></div>
			{/* <div className='relative w-32 h-32 animate-spin-slow'>
				<Image src="/circle.png" alt='spin' fill className="object-cover" />
			</div> */}
		</div>
	</Swiper>
  );
};

export default MainSwiper;
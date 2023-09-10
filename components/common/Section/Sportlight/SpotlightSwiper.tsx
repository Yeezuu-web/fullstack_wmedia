"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

import Swiper from 'swiper';
// import SwiperCore from 'swiper';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "../../../../styles/spotlight-swiper.css"

const SpotlightSwiper = () => {
	const swiperContainerRef = useRef(null);
	const rtlSwiperRef = useRef<Swiper | null>(null);
	const ltrSwiperRef = useRef<Swiper | null>(null);

	useEffect(() => {
		if (rtlSwiperRef.current) {
			rtlSwiperRef.current.destroy();
		}
		if (ltrSwiperRef.current) {
			ltrSwiperRef.current.destroy();
		}
		// Initialize the first Swiper (RTL)
		rtlSwiperRef.current = new Swiper(".spotlight_swiper__top", {
			breakpoints: {
				640: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 60
				}
			},
			autoplay: { delay: 3000, disableOnInteraction: false},
			loop: true,
			direction: 'horizontal',
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
		});

		 // Initialize the second Swiper (LTR)
		ltrSwiperRef.current = new Swiper(".spotlight_swiper__buttom", {
			breakpoints: {
				640: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 60
				}
			},
			autoplay: { delay: 3000, disableOnInteraction: false},
			loop: true,
			direction: 'horizontal',
			navigation: {
				nextEl: ".spotlight_swiper-button-next",
				prevEl: ".spotlight_swiper-button-prev",
			},
		});

	}, []);



	const goToNextSlide = () => {
		if (ltrSwiperRef.current) {
			ltrSwiperRef.current.slideNext();
		}
		if (rtlSwiperRef.current) {
			rtlSwiperRef.current.slideNext();
		}
	};

	const goToPrevSlide = () => {
		if (ltrSwiperRef.current) {
		  ltrSwiperRef.current.slidePrev();
		}
		if (rtlSwiperRef.current) {
			rtlSwiperRef.current.slidePrev();
		  }
	};

  return (
	<div className='relative w-full h-full home-spotlight-swiper'>
		<div className='absolute py-16 w-full flex items-center justify-center'>
			<span className='text-center text-5xl 2xl:text-6xl text-white'>Spotlight on</span>
			<span className='text-center text-5xl 2xl:text-6xl text-red-500 font-bold ml-1 2xl:ml-2 '>W MEDIA</span>
		</div>
		<div className='spotlight-swiper w-full h-full flex flex-col items-center justify-center space-y-16'>
			<div className='spotlight_swiper__top mt-16' dir='rtl'>
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className='relative w-full h-full bg-red-300'>
							<Image src="/1.jpg" alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />
						</div>
					</div>
					<div className="swiper-slide">		
						<div className='relative w-full h-full bg-red-300'>
							<Image src="/2.jpg" alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />
						</div>
					</div>
					<div className="swiper-slide">		
						<div className='relative w-full h-full bg-red-300'>
							<Image src="/3.png" alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />
						</div>
					</div>
					<div className="swiper-slide">
						<div className='relative w-full h-full bg-red-300'>
							<Image src="/4.jpg" alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />
						</div>
					</div>
				</div>
			</div>
			<div className='spotlight_swiper__buttom'>
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className='relative w-full h-full bg-red-300'>
							<Image src="/5.jpg" alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />
						</div>
					</div>
					<div className="swiper-slide">		
						<div className='relative w-full h-full bg-red-300'>
							<Image src="/6.jpg" alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />
						</div>
					</div>
					<div className="swiper-slide">		
						<div className='relative w-full h-full bg-red-300'>
							<Image src="/7.png" alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />
						</div>
					</div>
					<div className="swiper-slide">
						<div className='relative w-full h-full bg-red-300'>
							<Image src="/8.png" alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />
						</div>
					</div>
				</div>
			</div>
			<div className="spotlight-swiper__navigation absolute w-full flex items-center -buttom-1/2 justify-between opacity-0 z-10 transition-all duration-300 ease-in-out px-4 laptop:px-12 2xl:px-14 pointer-events-none">
				<button onClick={goToPrevSlide} className="spotlight-swiper__prev w-16 h-16 2xl:w-20 2xl:h-20 flex items-center justify-center bg-transparent transition-all duration-300 ease-in-out pointer-events-auto border-2 border-white hover:bg-white rounded-full group">
					<HiChevronLeft className="w-7 h-7 laptop:w-10 laptop:h-10 text-white group-hover:text-black" />
				</button>
				<button onClick={goToNextSlide} className="spotlight-swiper__next w-16 h-16 2xl:w-20 2xl:h-20 flex items-center justify-center bg-transparent transition-all duration-300 ease-in-out pointer-events-auto border-2 border-white hover:bg-white rounded-full group">
					<HiChevronRight className="w-7 h-7 laptop:w-10 laptop:h-10 text-white group-hover:text-black" />
				</button>
			</div>
		</div>
		<div className="absolute w-full h-full -z-10 top-0">
			<Image
				src="/bg-pic.jpg"
				alt="bg-pic"
				fill
				className="object-cover"
			/>
		</div>
		<div className="absolute w-full h-full -z-[9] top-0 bg-gradient-brand"></div>
	</div>
  );
};

export default SpotlightSwiper;
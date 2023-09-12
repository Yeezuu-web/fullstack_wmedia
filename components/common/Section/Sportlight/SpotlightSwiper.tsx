"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

import {Swiper, SwiperOptions} from 'swiper';
import Modal from '../../../ui/modal'
// import SwiperCore from 'swiper';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "../../../../styles/spotlight-swiper.css"

type Image = {
	id: number;
	src: string
};

const SpotlightSwiper = () => {
	const rtlSwiperRef = useRef<Swiper | null>(null);
	const ltrSwiperRef = useRef<Swiper | null>(null);

	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [selectedImage, setSelectedImage] = useState<Image | null>(null);

	const imagesButtom = useMemo<Image[]>(() => [
		{id: 1, src: '/5.jpg'},
		{id: 2, src: '/6.jpg'},
		{id: 3, src: '/7.png'},
		{id: 4, src: '/8.png'},
		{id: 5, src: '/5.jpg'},
		{id: 6, src: '/6.jpg'},
		{id: 7, src: '/7.png'},
		{id: 8, src: '/8.png'},
		{id: 9, src: '/8.png'},
	], [])

	const imagesTop = useMemo<Image[]>(() => [
			{id: 1, src: '/1.jpg'},
			{id: 2, src: '/2.jpg'},
			{id: 3, src: '/3.png'},
			{id: 4, src: '/4.jpg'},
			{id: 5, src: '/1.jpg'},
			{id: 6, src: '/2.jpg'},
			{id: 7, src: '/3.png'},
			{id: 8, src: '/4.jpg'},
			{id: 9, src: '/4.jpg'},
		]
	, [])

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
					loopedSlides: 3,
					spaceBetween: 40,
				},
				1200: {
					slidesPerView: 4,
					loopedSlides: 4,
					spaceBetween: 60,
				}
			},
			autoplay: { delay: 3000, disableOnInteraction: false},
			loop: true,
			direction: 'horizontal',
			allowTouchMove: false,
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			slideToClickedSlide: true,
			on: {
				click: () => { 
					const clickedSlide = rtlSwiperRef.current?.clickedSlide;
					const param = (clickedSlide as any).dataset.param;
					const image = imagesTop.find((img) => img.src === param) ?? null;
					image !== null ? openModal(image) : null
				}
			}
		} as SwiperOptions);

		 // Initialize the second Swiper (LTR)
		ltrSwiperRef.current = new Swiper(".spotlight_swiper__buttom", {
			breakpoints: {
				640: {
					slidesPerView: 3,
					loopedSlides: 3,
					spaceBetween: 40
				},
				1200: {
					slidesPerView: 4,
					loopedSlides: 4,
					spaceBetween: 60
				}
			},
			autoplay: { delay: 3000, disableOnInteraction: false},
			loop: true,
			direction: 'horizontal',
			allowTouchMove: false,
			navigation: {
				nextEl: ".spotlight_swiper-button-next",
				prevEl: ".spotlight_swiper-button-prev",
			},
			slideToClickedSlide: true,
			on: {
				click: () => { 
					const clickedSlide = ltrSwiperRef.current?.clickedSlide;
					const param = (clickedSlide as any).dataset?.param;
					const image = imagesButtom.find((img) => img.src === param) ?? null;
					image !== null ? openModal(image) : null
				}
			}
		} as SwiperOptions);
	}, [imagesButtom, imagesTop]);

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

	const openModal = (image: Image) => {
		setSelectedImage(image);
		setModalOpen(true);
	}

	const onClose = () => {
		setSelectedImage(null);
		setModalOpen(false);	
	}

  return (
	<div className='relative w-full h-full home-spotlight-swiper overflow-hidden'>
		<Modal isOpen={modalOpen} onClose={onClose} imageSrc={selectedImage?.src ?? ''} />
		<div className='absolute py-16 w-full flex items-center justify-center'>
			<span className='text-center text-5xl 2xl:text-6xl text-white'>Spotlight on</span>
			<span className='text-center text-5xl 2xl:text-6xl text-red-500 font-bold ml-1 2xl:ml-2 '>W MEDIA</span>
		</div>
		<div className='spotlight-swiper w-full h-full flex flex-col items-center justify-center space-y-16'>
			<div className='spotlight_swiper__top mt-16' dir='rtl'>
				<div className="swiper-wrapper">
					{imagesTop.map((image, index) => {
						console.log(image.src) 
								return (
									<div className="swiper-slide" key={index} data-param={image.src}>
											<div className='relative w-full h-full bg-red-300 cursor-pointer' >
												<Image src={image.src} alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />	
											</div>
									</div>
								)
							}
						)
					}
				</div>
			</div>
			<div className='spotlight_swiper__buttom'>
				<div className="swiper-wrapper">
					{imagesButtom.map((image, index) => (
						<div className="swiper-slide" key={index} data-param={image.src}>
								<div className='relative w-full h-full bg-red-300 cursor-pointer' >
									<Image src={image.src} alt='banner' fill className='mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 ease-in-out z-0 object-cover object-center' />	
								</div>
						</div>
					))}
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
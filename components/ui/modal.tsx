"use client";

import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { HiOutlineX } from 'react-icons/hi';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	imageSrc?: string | '';
}

const Modal = ({isOpen, onClose, imageSrc}: ModalProps) => {

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					open={isOpen}
					onClose={onClose}
					className="relative z-10"
				>	
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-90 pointer-events-none" aria-hidden="true" />

				</Transition.Child>


					<div className='fixed inset-0 flex w-full h-full items-center justify-center p-4'>
						<div className="relative flex w-full min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="relative z-[11] w-full max-w-sm lg:max-w-4xl laptop:max-w-6xl h-1/2 mx-auto transform overflow-hidden shadow-xl transition-all">
								<div className='flex flex-col justify-center'>
									<button onClick={onClose} type="button" className='absolute top-2 right-2 lg:top-[25%] lg:right-[15%] 2xl:top-[20%] 2xl:right-[5%] w-9 h-9 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border-solid  border-[1px] border-white bg-transparent hover:bg-white text-white hover:text-black transition-all duration-300 ease-in-out'>
										<HiOutlineX className="w-6 lg:w-8 h-6 lg:h-8"/>
									</button>
									<div className='h-full lg:h-screen flex flex-col lg:flex-row items-center justify-center'>
										<div className='flex-grow-0 flex-shrink-0 basis-full lg:basis-[45%] 2xl:basis-3/5'>
											<Image src={imageSrc ?? '/1.jpg'} alt='banner' width={800} height={600} className='object-cover object-center' />
										</div>
										<div className='flex flex-col items-start justify-between space-y-4 lg:space-y-6 p-4 lg:p-6 xl:p-10 flex-grow-0 flex-shrink-0 basis-full lg:basis-[35%] 2xl:basis-[45%] bg-white lg:-translate-x-[15%] lg:translate-y-[60%] 2xl:translate-y-[80%]'>
											<span className='text-2xl lg:text-3xl laptop:text-5xl font-bold text-start'>
												Asian Game 2022
											</span>
											<span className='text-sm lg:text-lg xl:text-xl font-normal text-start'>
												เชียร์ทัพนักกีฬาไทย คว้าชัยในศึกเอเเชียนเกมส์ 2022
												วันที่ 23 ส.ค. - 8 ต.ค. นี้
												ดูเอเชียนเกมส์ ดูช่องเวิร์คพอยท์ 23
											</span>
											<button className='px-8 py-4 border-2 border-black/60'>EXPORE</button>
										</div>
									</div>
								</div>


								{/* <div className='relative'>
									<div className='absolute w-full h-[37vh]'>
										<Image src={imageSrc ?? '/1.jpg'} alt='banner' fill sizes='100%' className='object-cover object-center' />
									</div>
									<div className='absolute left-96 -top-10 max-w-96 flex flex-col items-start justify-between space-y-4 p-4 bg-white'>
										<span className='text-xl font-bold '>
											Asian Game 2022
										</span>
										<span className='text-base font-normal text-start'>
											เชียร์ทัพนักกีฬาไทย คว้าชัยในศึกเอเเชียนเกมส์ 2022
											วันที่ 23 ส.ค. - 8 ต.ค. นี้
											ดูเอเชียนเกมส์ ดูช่องเวิร์คพอยท์ 23
										</span>
									</div>
								</div> */}
							</Dialog.Panel>
						</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default Modal;
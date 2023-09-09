import Image from 'next/image'

const Carousel = () => {
  return (
	<div className='relative w-full h-screen'>
		<Image src="/banner-4.jpg" alt='banner' fill className='object-cover object-center' />
		<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
	</div>
  )
}

export default Carousel
import React from 'react'
import Carousel from './Carousel'
import Image from 'next/image'
import MainSwiper from './HeaderSwiper'

const Header = () => {
  return (
	<div className='relative top-0 w-full h-screen'>
		<MainSwiper />
	</div>
  )
}

export default Header
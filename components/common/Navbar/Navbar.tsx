
'use client';

import {
	FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube
} from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import NavBarItem from './NavBarItem';
import { Fragment, useEffect, useState } from 'react';
import { linksRight, linksLeft } from '@/utils/navbar-links';
import Logo from '../Logo/Logo';

interface Links {
	links: {
		href: string;
		label: string;
	}[];
}
const NavbarMap: React.FC<Links> = ({links}) => {
	return (
		<Fragment>
			<ul className='flex items-center justify-between'>
				{links?.map((link, index) => (
					<NavBarItem href={link.href} label={link.label} key={index}/>
				))}
			</ul>
		</Fragment>
	)
}

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
	const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);
	
	useEffect(() => {
		const handleScroll = () => {
		  const currentScrollPos = window.pageYOffset;
		  setIsScrolledDown(currentScrollPos > prevScrollPos);
	
		  setIsScrolled(currentScrollPos > 0);
		  setPrevScrollPos(currentScrollPos);
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, [prevScrollPos]);

  return (
	<header className={`fixed z-20 w-full h-[130px] top-0 left-0 right-0 items-center justify-center overflow-hidden transition-colors duration-300 ${
        isScrolled ? 'bg-black' : 'bg-transparent'} ${isScrolledDown ? 'hidden' : 'laptop:flex'}`}>
		<nav className='container w-full'>
			<div className='flex items-center justify-end gap-2 mb-1 text-white'>
				<div>
					<span>
						<span>WORK</span>
						: 15:00 KH
					</span>
					<span>
						-0.20 (-1.30%)
					</span>
				</div>
				<LanguageSwitcher />
			</div>
			<div className='w-full max-w-full flex items-center justify-center'>
				<div className='w-[calc(50%-65px)] flex justify-end'>
					<NavbarMap links={linksLeft}/>
				</div>

				<div className='flex flex-col items-center justify-center w-[130px] text-white'>
					<Logo size='sm'/>
				</div>

				<div className='w-[calc(50%-65px)] flex items-center justify-between'>
					<NavbarMap links={linksRight} />
					<div className='hidden 2xl:flex items-center justify-end'>
						<button className='px-1 xl:px-2 group'>
							<FaFacebookSquare className="w-6 h-6 group-hover:text-red-600 text-white text-base 2xl-text-xl" />
						</button>
						<button className='px-1 xl:px-2 group'>
							<FaTwitter className="w-6 h-6 group-hover:text-red-600 text-white text-base 2xl-text-xl" />
						</button>
						<button className='px-1 xl:px-2 group'>
							<FaInstagram className="w-6 h-6 group-hover:text-red-600 text-white text-base 2xl-text-xl" />
						</button>
						<button className='px-1 xl:px-2 group'>
							<FaYoutube className="w-6 h-6 group-hover:text-red-500 text-white text-base 2xl-text-xl" />
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
  )
}

export default Navbar


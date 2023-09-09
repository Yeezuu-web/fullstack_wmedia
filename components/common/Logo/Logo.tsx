import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
	size: "sm" | "md" | "lg"
}

const Logo = (size: LogoProps) => {

  return (
	<Link href='/' className='group'>
		<div className='relative w-16 h-16 transition-all duration-300 group-hover:scale-110 cursor-pointer'>
			<Image src='/logo.jpg' alt='logo' fill className='object-cover'/>
		</div>
	</Link>
  )
}

export default Logo
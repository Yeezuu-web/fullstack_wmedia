import Link from 'next/link'
import React from 'react'

interface NavBarItemProps {
	href: string;
	label: string
}


const NavBarItem: React.FC<NavBarItemProps> = ({href, label}) => {
  return (
	<li className="px-4 xl:px-8 py-1 uppercase text-white font-medium text-xl group">
		<Link href={href}>
			<span className="hover:border-b-4 hover:border-red-500 group-hover:text-red-500 transition-all duration-300">
				{label}
			</span>
		</Link>	
	</li>
  )
}

export default NavBarItem
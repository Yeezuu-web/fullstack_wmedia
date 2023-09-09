import Navbar from '@/components/common/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Header from '@/components/common/Header/Header'

const outfit = Outfit({weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'W Media',
  description: 'Digital marketing and Media-Entertainment agency.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      	<body className={outfit.className}>
			<div className='relative'>
				<Navbar />
			</div>
			<main>
				{children}
			</main>
		</body>
    </html>
  )
}

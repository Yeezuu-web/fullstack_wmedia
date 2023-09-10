import Image from 'next/image'

const Business = () => {
  return (
	<div className='relative w-full h-full'>
		<div className="container mx-auto pt-12">
			<div className="flex flex-col laptop:flex-row items-center justify-between">
				<div className="relative w-full h-96 laptop:w-1/2">
					<Image src="/banner-4.jpg" alt='BM-COVER' fill className='object-cover' />
				</div>
			</div>
		</div>
		<div className="absolute w-full h-screen -z-[9] top-0 bg-[#612222]"></div>
	</div>
  )
}

export default Business
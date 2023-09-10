import Header from "@/components/common/Header/Header";
import Business from "@/components/common/Section/Business/Business";
import SportLight from "@/components/common/Section/Sportlight/SportLight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
		<Header />

		{/* Sportlight section */}
		<SportLight />
		<Business />
	</div>
  )
}

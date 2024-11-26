import Image from "next/image"
import star from "../../Assets/Star 1.png"
import RightVector from "../../Assets/customers vector.png"

const Customers = () => {
  return (
    <div className="px-4 mb-[100px]">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-6 md:gap-10">
            
            <div className="heading text-[32px] leading-9 font-extrabold font-integralCF md:text-5xl">
            <h1>OUR HAPPY CUSTOMERS</h1>
            </div>

            <div className="cards flex gap-5">

                <div className="card1 border border-[#0000001A] p-6 rounded-[20px] md:px-8 md:py-7">
                    <div className="cardText flex flex-col gap-[22px]">
                        <div className="stars flex gap-2">
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                        </div>
                        <div className="flex items-center gap-1">
                        <h1 className="text-lg font-extrabold font-satoshi md:text-2xl text-[#000000]">Sarah M.</h1>
                        <Image src={RightVector} alt="" className="w-[19px] h-[19px] md:w-7 md:h-7"></Image>
                        </div>
                        <p className="font-normal text-sm md:text-base text-[#00000099] md:leading-[22px]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </div>

                <div className="card1 border border-[#0000001A] p-6 rounded-[20px] md:px-8 md:py-7 hidden sm:block">
                    <div className="cardText flex flex-col gap-[22px]">
                        <div className="stars flex gap-2">
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                        </div>
                        <div className="flex items-center gap-1">
                        <h1 className="text-lg font-extrabold font-satoshi md:text-2xl text-[#000000]">Alex K.</h1>
                        <Image src={RightVector} alt="" className="w-[19px] h-[19px] md:w-7 md:h-7"></Image>
                        </div>
                        <p className="font-normal text-sm md:text-base text-[#00000099] md:leading-[22px]">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                </div>

                <div className="card1 border border-[#0000001A] p-6 rounded-[20px] md:px-8 md:py-7 hidden md:block">
                    <div className="cardText flex flex-col gap-[22px]">
                        <div className="stars flex gap-2">
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                            <Image src={star} alt="" className="w-5 h-5 md:w-6 md:h-6"></Image>
                        </div>
                        <div className="flex items-center gap-1">
                        <h1 className="text-lg font-extrabold font-satoshi md:text-2xl text-[#000000]">James L.</h1>
                        <Image src={RightVector} alt="" className="w-[19px] h-[19px] md:w-7 md:h-7"></Image>
                        </div>
                        <p className="font-normal text-sm md:text-base text-[#00000099] md:leading-[22px]">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Customers
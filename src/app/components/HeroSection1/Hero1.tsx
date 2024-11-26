import Image from "next/image";
import HeroImage from "../../Assets/header-homepage.png"
import Background from "../../Assets/header-res-homepage.png";
import HeroVector1 from "../../Assets/Hero vector1.png";
import HeroVector from "../../Assets/Hero vector.png";



export default function Hero1() {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="max-w-[1240px] mx-auto md:flex">
        <div className="flex flex-col px-4 py-12 gap-4 md:w-1/2 justify-center">
          <div className="flex flex-col gap-5 md:gap-8">
            <h1 className="text-4xl font-extrabold leading-8 lg:text-[60px] lg:leading-[60px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-sm font-medium text-[#00000099] md:text-base font-satoshi">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <div className="bg-black py-3 lg:py-4 px-14 rounded-[62px] text-white text-center text-base md:w-[210px]">Shop Now</div>
          </div>

          <div className=" flex flex-wrap justify-around gap-3">
            <div className="flex flex-col gap-1 font-satoshi">
              <h1 className="text-[28px] leading-8 font-extrabold lg:text-[30px] lg:leading-[54px]">200+</h1>
              <p className="text-sm font-medium leading-[22px] text-[#00000099] lg:text-base">International Brands</p>
            </div>

            <div className="line border border-[#0000001A]"></div>

            <div className="flex flex-col gap-1 font-satoshi">
              <h1 className="text-[28px] leading-8 font-extrabold lg:text-[30px] lg:leading-[54px]">2,000+</h1>
              <p className="text-sm font-medium leading-[22px] text-[#00000099] lg:text-base">High Quality Products</p>
            </div>

            <div className="line border border-[#0000001A] sm:block hidden"></div>

            <div className="flex flex-col gap-1 font-satoshi">
              <h1 className="text-[28px] leading-8 font-extrabold lg:text-[30px] lg:leading-[54px]">30,000+</h1>
              <p className="text-sm font-medium leading-[22px] text-[#00000099] lg:text-base">Happy Customers</p>
            </div>

          </div>
        </div>

        <div className="relative md:w-1/2">
          <div className="absolute lg:top-[100px] top-[67px] right-5 w-20 md:w-[104px]">
            <Image src={HeroVector} alt="" className="w-full"></Image>
          </div>

          <div className="absolute w-11 lg:top-80 md:top-60 sm:top-[23rem] top-52 left-5 md:w-[56px]">
            <Image src={HeroVector1} alt="" className="w-full"></Image>
          </div>
          
        <div className="w-full h-full">
          <Image className="w-full h-full block md:hidden" src={Background} alt=""></Image>
          <Image src={HeroImage} alt="" className="w-full h-full hidden md:block"></Image>
        </div>

        </div>

      </div>
    </div>
      
  );
}

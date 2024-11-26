import Image from "next/image"
import styleImage1 from "../../Assets/dress-style-1.png"
import styleImage2 from "../../Assets/dress-style-2.png"
import styleImage3 from "../../Assets/dress-style-3.png"
import styleImage4 from "../../Assets/dress-style-4.png"



const DressStyle = () => {
  return (
    <div className="bg-white px-4 py-[50px] lg:py-20">
        <div className="max-w-[1240px] pt-10 lg:pt-[70px] px-6 pb-7 lg:pb-[76px] bg-[#F0F0F0] mx-auto flex flex-col items-center gap-7 lg:gap-16 rounded-[20px] lg:rounded-[40px]">

        <div className="heading text-[32px] md:text-5xl leading-9 font-integralCF font-extrabold text-center text-black">
          <h1>BROWSE BY DRESS STYLE</h1>
        </div>

        <div className="cards flex flex-wrap gap-10 items-center justify-center">
            <div className="card1 w-[310px] h-[190px] xl:w-[407px] xl:h-[289px] lg:w-[375px] lg:h-[250px] relative">
                <h1 className="text-2xl font-bold font-satoshi absolute top-4 left-6">Casual</h1>
                <Image src={styleImage1} alt="" className="w-full h-full rounded-[20px]"></Image>
            </div>

            <div className="card1 w-[310px] h-[190px] xl:w-[684px] xl:h-[289px] lg:w-[575px] lg:h-[250px] relative">
            <h1 className="text-2xl font-bold font-satoshi absolute top-4 left-6">Formal</h1>
                <Image src={styleImage2} alt="" className="w-full h-full rounded-[20px]"></Image>
            </div>

            <div className="card1 w-[310px] h-[190px] xl:w-[684px] xl:h-[289px] lg:w-[575px] lg:h-[250px] relative">
            <h1 className="text-2xl font-bold font-satoshi absolute top-4 left-6">Party</h1>
                <Image src={styleImage3} alt="" className="w-full h-full rounded-[20px]"></Image>
            </div>

            <div className="card1 w-[310px] h-[190px] xl:w-[407px] xl:h-[289px] lg:w-[375px] lg:h-[250px] relative">
            <h1 className="text-2xl font-bold font-satoshi absolute top-4 left-6">Gym</h1>
                <Image src={styleImage4} alt="" className="w-full h-full rounded-[20px]"></Image>
            </div>
        </div>
        </div>
    </div>


  )
}

export default DressStyle
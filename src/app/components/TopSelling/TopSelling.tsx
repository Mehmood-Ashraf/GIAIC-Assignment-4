import Button from "../Button/Button"
import Image from "next/image"
import image5 from "../../Assets/pic5.png"
import image6 from "../../Assets/pic6.png"
import image7 from "../../Assets/pic7.png"
import image8 from "../../Assets/pic8.png"
import Star from "../../Assets/Star 1.png";



const TopSelling = () => {
  return (
    <div className="bg-white px-2 xl:pb-16 xl:pt-[72px] pb-10 pt-[50px] sm:pb-16 sm:pt-[72px]">
      <div className="mx-auto max-w-[1240px] flex flex-col gap-8 lg:gap-[55px] justify-center items-center">
        
        <div className="heading text-[32px] md:text-5xl font-integralCF font-extrabold leading-[38px] text-center text-black">
          <h1>TOP SELLING</h1>
        </div>

        <div className="cards flex gap-5 flex-wrap justify-around">

          <div className="card1 flex flex-col gap-[10px]">
            <div className="cardimage bg-[#F0EEED] w-[198px] h-[200px] xl:w-[295px] xl:h-[298px] rounded-[20px] lg:w-[250px] lg:h-[252px]">
              <Image
                src={image5}
                alt=""
                className="rounded-[20px] w-full h-full"
              ></Image>
            </div>
            <div className="cardtext flex flex-col gap-1">
              <h1 className="font-satoshi text-base font-bold leading-[21.6px] lg:text-xl">
                Vertical Striped Shirt
              </h1>
              <div className="stars flex items-center gap-1">
                <Image src={Star} alt="" className="w-[18.5] h-[18.5]"></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <p className="text-xs font-normal lg:text-sm font-satoshi">5.0/5</p>
              </div>
              <div className="price flex gap-[5px] lg:gap-[10px] items-center">
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$212</p>
                <p className="text-xl font-bold font-satoshi lg:text-2xl text-[#00000066] line-through">$232</p>
                <p className="text-[#FF3333] text-[10px] font-medium font-satoshi lg:text-xs py-[6px] px-[14px] rounded-[62px] bg-[#FF33331A]">-20%</p>
              </div>
            </div>
          </div>

          <div className="card1 card2 flex flex-col gap-[10px]">
            <div className="cardimage bg-[#F0EEED] w-[198px] h-[200px] lg:w-[250px] lg:h-[252px] xl:w-[295px] xl:h-[298px] rounded-[20px]">
              <Image
                src={image6}
                alt=""
                className="rounded-[20px] w-full h-full"
              ></Image>
            </div>
            <div className="cardtext flex flex-col gap-1">
              <h1 className="font-satoshi text-base font-bold leading-[21.6px] lg:text-xl">
              Courage Graphic T-shirt
              </h1>
              <div className="stars flex items-center gap-1">
                <Image src={Star} alt="" className="w-[18.5] h-[18.5]"></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <p className="text-xs font-normal lg:text-sm font-satoshi">4.0/5</p>
              </div>
              <div className="price flex gap-[5px] lg:gap-[10px] items-center">
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$145</p>
              </div>
            </div>
          </div>

          <div className="card1 card3 hidden sm:flex flex-col gap-[10px]">
            <div className="cardimage bg-[#F0EEED] w-[198px] h-[200px] xl:w-[295px] xl:h-[298px] lg:w-[250px] lg:h-[252px] rounded-[20px]">
              <Image
                src={image7}
                alt=""
                className="rounded-[20px] w-full h-full"
              ></Image>
            </div>
            <div className="cardtext flex flex-col gap-1">
              <h1 className="font-satoshi text-base font-bold leading-[21.6px] lg:text-xl">
                Loose Fit Bermuda Shorts
              </h1>
              <div className="stars flex items-center gap-1">
                <Image src={Star} alt="" className="w-[18.5] h-[18.5]"></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <p className="text-xs font-normal lg:text-sm font-satoshi">3.0/5</p>
              </div>
              <div className="price flex gap-[5px] lg:gap-[10px] items-center">
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$80</p>
              </div>
            </div>
          </div>

          <div className="card1 card4 hidden sm:flex flex-col gap-[10px]">
            <div className="cardimage bg-[#F0EEED] w-[198px] h-[200px] xl:w-[295px] xl:h-[298px] rounded-[20px] lg:w-[250px] lg:h-[252px]">
              <Image
                src={image8}
                alt=""
                className="rounded-[20px] w-full h-full"
              ></Image>
            </div>
            <div className="cardtext flex flex-col gap-1">
              <h1 className="font-satoshi text-base font-bold leading-[21.6px] lg:text-xl">
                Faded Skinny Jeans
              </h1>
              <div className="stars flex items-center gap-1">
                <Image src={Star} alt="" className="w-[18.5] h-[18.5]"></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <p className="text-xs font-normal lg:text-sm font-satoshi">4.5/5</p>
              </div>
              <div className="price flex gap-[5px] lg:gap-[10px] items-center">
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="[@media(max-width:640px)]:w-full w-[218px] h-[52px]">
          <Button />
        </div>
      </div>
    </div>
  )
}

export default TopSelling
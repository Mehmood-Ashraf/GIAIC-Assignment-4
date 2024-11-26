import Image from "next/image";
import image1 from "../../Assets/pic1.png";
import image2 from "../../Assets/pic2.png";
import image3 from "../../Assets/pic3.png";
import image4 from "../../Assets/pic4.png";
import Star from "../../Assets/Star 1.png";
import Button from "../Button/Button";

export default function Arrivals() {
  return (
    <div className="bg-white px-2 xl:pb-16 xl:pt-[72px] pb-10 pt-[50px] sm:pb-16 sm:pt-[72px]">
      <div className="mx-auto max-w-[1240px] flex flex-col gap-8 lg:gap-[55px] justify-center items-center">
        
        <div className="heading text-[32px] md:text-5xl font-integralCF font-extrabold leading-[38px] text-center text-black">
          <h1>NEW ARRIVALS</h1>
        </div>

        <div className="cards flex gap-5 flex-wrap justify-around">

          <div className="card1 flex flex-col gap-[10px]">
            <div className="cardimage bg-[#F0EEED] w-[198px] h-[200px] xl:w-[295px] xl:h-[298px] rounded-[20px] lg:w-[250px] lg:h-[252px]">
              <Image
                src={image1}
                alt=""
                className="rounded-[20px] w-full h-full"
              ></Image>
            </div>
            <div className="cardtext flex flex-col gap-1">
              <h1 className="font-satoshi text-base font-bold leading-[21.6px] lg:text-xl">
                T-shirt with Tape Details
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
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$120</p>
              </div>
            </div>
          </div>

          <div className="card1 card2 flex flex-col gap-[10px]">
            <div className="cardimage bg-[#F0EEED] w-[198px] h-[200px] lg:w-[250px] lg:h-[252px] xl:w-[295px] xl:h-[298px] rounded-[20px]">
              <Image
                src={image2}
                alt=""
                className="rounded-[20px] w-full h-full"
              ></Image>
            </div>
            <div className="cardtext flex flex-col gap-1">
              <h1 className="font-satoshi text-base font-bold leading-[21.6px] lg:text-xl">
              Skinny Fit Jeans
              </h1>
              <div className="stars flex items-center gap-1">
                <Image src={Star} alt="" className="w-[18.5] h-[18.5]"></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <Image src={Star} alt=""></Image>
                <p className="text-xs font-normal lg:text-sm font-satoshi">3.5/5</p>
              </div>
              <div className="price flex gap-[5px] lg:gap-[10px] items-center">
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$240</p>
                <p className="text-xl font-bold font-satoshi lg:text-2xl text-[#00000066] line-through">$260</p>
                <p className="text-[#FF3333] text-[10px] font-medium font-satoshi lg:text-xs py-[6px] px-[14px] rounded-[62px] bg-[#FF33331A]">-20%</p>
              </div>
            </div>
          </div>

          <div className="card1 card3 hidden sm:flex flex-col gap-[10px]">
            <div className="cardimage bg-[#F0EEED] w-[198px] h-[200px] xl:w-[295px] xl:h-[298px] lg:w-[250px] lg:h-[252px] rounded-[20px]">
              <Image
                src={image3}
                alt=""
                className="rounded-[20px] w-full h-full"
              ></Image>
            </div>
            <div className="cardtext flex flex-col gap-1">
              <h1 className="font-satoshi text-base font-bold leading-[21.6px] lg:text-xl">
                Checkered Shirt
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
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$180</p>
              </div>
            </div>
          </div>

          <div className="card1 card4 hidden sm:flex flex-col gap-[10px]">
            <div className="cardimage bg-[#F0EEED] w-[198px] h-[200px] xl:w-[295px] xl:h-[298px] rounded-[20px] lg:w-[250px] lg:h-[252px]">
              <Image
                src={image4}
                alt=""
                className="rounded-[20px] w-full h-full"
              ></Image>
            </div>
            <div className="cardtext flex flex-col gap-1">
              <h1 className="font-satoshi text-base font-bold leading-[21.6px] lg:text-xl">
                Sleeve Striped T-shirt
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
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$130</p>
                <p className="text-xl font-bold font-satoshi lg:text-2xl text-[#00000066] line-through">$160</p>
                <p className="text-[#FF3333] text-[10px] font-medium font-satoshi lg:text-xs py-[6px] px-[14px] rounded-[62px] bg-[#FF33331A]">-30%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="[@media(max-width:640px)]:w-full w-[218px] h-[52px]">
          <Button />
        </div>
      </div>
    </div>
  );
}


{/**<div className="price flex gap-[5px] lg:gap-[10px] items-center">
                <p className="text-xl font-bold font-satoshi lg:text-2xl">$212</p>
                <p className="text-xl font-bold font-satoshi lg:text-2xl text-[#00000066] line-through">$235</p>
                <p className="text-[#FF3333] text-[10px] font-medium font-satoshi lg:text-xs">-20%</p>
              </div> */}
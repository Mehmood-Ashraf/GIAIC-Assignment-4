import Image from "next/image";
import EmailVector from "../../Assets/Email vector.png";
import Logo from "../../Assets/logo.png";
import socIcon1 from "../../Assets/Twitter Vector.png";
import socIcon2 from "../../Assets/FB Vector.png";
import socIcon3 from "../../Assets/Insta Vector.png";
import socIcon4 from "../../Assets/4.png";
import Line from "../Line/Line";
import cardsLogo1 from "../../Assets/visa logo.png";
import cardsLogo2 from "../../Assets/master logo.png";
import cardsLogo3 from "../../Assets/paypal logo.png";
import cardsLogo4 from "../../Assets/pay logo.png";
import cardsLogo5 from "../../Assets/G pay logo.png";

const Footer = () => {
  return (
    <footer className="relative pt-20">
      <div className="mx-auto bg-black xl:w-[1240px] w-[358px] sm:[500px] md:w-[620px] lg:w-[850px] px-6 py-8 md:px-16 md:py-9 rounded-[20px] flex flex-col justify-center items-center lg:flex-row gap-5">
          <div className="text-white text-[32px] font-extrabold leading-[35px] lg:text-[40px] lg:leading-[45px]">
            <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
          </div>

          <div className="flex flex-col gap-[14px] w-full items-center">
            <div className="bg-white md:py-3 md:px-4 py-2 px-3 rounded-[62px] flex gap-3 md:w-[349px] md:h-12 w-full">
              <Image src={EmailVector} alt=""></Image>
              <p className="text-sm font-normal text-[#00000066] md:text-base">
                Enter your email address
              </p>
            </div>
            <div className="text-center bg-white md:py-3 md:px-4 py-2 px-3 rounded-[62px] md:w-[349px] h-[48px] w-full">
              <p className="text-lg font-satoshi font-semibold">Subscribe to Newsletter</p>
            </div>
          </div>
        </div>


      <div className=" bg-[#F0F0F0] absolute top-[235px] md:top-[184px] w-full pt-[195px] pb-12 -z-10 px-5">

        <div className="footContent max-w-[1240px] mx-auto flex justify-between flex-wrap gap-6">
          <div className="flex flex-col gap-5 md:gap-[35px] md:w-[248px] md:h-[177px]">
            <div className="logo w-[144px] h-5 md:w-[167px] md:h-[23px]">
              <Image src={Logo} alt="" className="w-full h-full"></Image>
            </div>
            <p className="text-[#00000099] text-sm font-normal md:leading-[22px]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="socialIcons flex gap-3">
              <Image src={socIcon1} alt="" className="w-7 h-7"></Image>
              <Image src={socIcon2} alt="" className="w-7 h-7"></Image>
              <Image src={socIcon3} alt="" className="w-7 h-7"></Image>
              <Image src={socIcon4} alt="" className="w-7 h-7"></Image>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-14">
            <div className="">
              <div className="text-[#00000099] flex flex-col gap-4 md:gap-[26px]">
                <p className=" text-[#000000] text-base font-semibold leading-[18px] tracking-[3px]">
                  COMPANY
                </p>
                <p className="text-base font-medium leading-[19px]">About</p>
                <p className="text-base font-medium leading-[19px]">Features</p>
                <p className="text-base font-medium leading-[19px]">Works</p>
                <p className="text-base font-medium leading-[19px]">Career</p>
              </div>
            </div>

            <div className="">
              <div className="text-[#00000099] flex flex-col gap-4 md:gap-[26px]">
                <p className=" text-[#000000] text-base font-semibold leading-[18px] tracking-[3px]">
                  HELP
                </p>
                <p className="text-base font-medium leading-[19px]">
                  Customer Support
                </p>
                <p className="text-base font-medium leading-[19px]">
                  Delivery Details
                </p>
                <p className="text-base font-medium leading-[19px]">
                  Terms & Conditions
                </p>
                <p className="text-base font-medium leading-[19px]">
                  Privacy Policy
                </p>
              </div>
            </div>

            <div className="">
              <div className="text-[#00000099] flex flex-col gap-4 md:gap-[26px]">
                <p className=" text-[#000000] text-base font-semibold leading-[18px] tracking-[3px]">
                  FAQ
                </p>
                <p className="text-base font-medium leading-[19px]">Account</p>
                <p className="text-base font-medium leading-[19px]">
                  Manage Deliveries
                </p>
                <p className="text-base font-medium leading-[19px]">Orders</p>
                <p className="text-base font-medium leading-[19px]">
                  Paymnents
                </p>
              </div>
            </div>

            <div className="">
              <div className="text-[#00000099] flex flex-col gap-4 md:gap-[26px]">
                <p className=" text-[#000000] text-base font-semibold leading-[18px] tracking-[3px]">
                  RESOURCES
                </p>
                <p className="text-base font-medium leading-[19px]">
                  Free eBooks
                </p>
                <p className="text-base font-medium leading-[19px]">
                  Develpoment Tutorial
                </p>
                <p className="text-base font-medium leading-[19px]">
                  How to -Blog
                </p>
                <p className="text-base font-medium leading-[19px]">
                  Youtube Playlist
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Line />
          </div>

          <div className="footer-end flex flex-col w-full items-center gap-3 md:flex-row justify-between">
            <div className="copyRight">
              <p className="text-[#00000099] text-sm font-medium font-satoshi">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
            </div>
            <div className="paymentLogos flex">
              <Image src={cardsLogo1} alt=""></Image>
              <Image src={cardsLogo2} alt=""></Image>
              <Image src={cardsLogo3} alt=""></Image>
              <Image src={cardsLogo4} alt=""></Image>
              <Image src={cardsLogo5} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

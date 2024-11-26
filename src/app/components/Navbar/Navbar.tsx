import Image from "next/image";
import Link from "next/link";
import ToogleBtn from "../../Assets/toogle-btn.png";
import NavIcon from "../../Assets/nav-icon.png";
import SearchIcon from "../../Assets/search-icon.png";
import NavVector1 from "../../Assets/Nav-Vector1.png"
import NavVector2 from "../../Assets/Nav-Vector2.png"
import NavVector3 from "../../Assets/Nav-Vector3.png"
import Logo from "../../Assets/logo.png"

export default function Navbar() {
  return (
    <div className="sticky top-[-1px] bg-white z-10 py-2 px-1 sm:py-6 sm:px-[50px] xl:px-0">
      <div className="max-w-[1240px] mx-auto h-[48px] flex gap-10 justify-between items-center">
        
        <div className="flex justify-center items-center gap-4">
        <button className="w-6 h-6 md:hidden">
          <Image src={ToogleBtn} alt="Toogle Button" className=""></Image>
        </button>
        
        <Image src={Logo} alt="" className="w-[126px] h-[18px] md:w-[160px] md:h-[22px]"></Image>
        {/* <h1 className="font-integralCF font-bold text-[32px]">SHOP.CO</h1> */}
        </div>
        
        <div className="md:flex gap-6 hidden font-satoshi text-base font-normal justify-center items-center">
          <Link
            href={"#"}
            className="font-satoshi text-base font-normal flex gap-1 justify-center items-center whitespace-nowrap"
          >
            Shop
            <div className="w-4 h-4 flex justify-center items-center">
              <Image
                src={NavIcon}
                alt="NavIcon"
                className="w-[11.5px] h-[11.5px]"
              ></Image>
            </div>
          </Link>
          <Link href={"#"} className="whitespace-nowrap">
            On Sale
          </Link>
          <Link href={"#"} className="whitespace-nowrap">
            New Arrivals
          </Link>
          <Link href={"#"} className="whitespace-nowrap">
            Brands
          </Link>
        </div>

        <div className="w-[577px] h-[48px] rounded-[62px] bg-[#F0F0F0] py-3 px-4 lg:flex gap-3 hidden">
          <Image src={SearchIcon} alt="SearchIcon" className="w-6"></Image>
          <p className="font-normal text-base text-[#00000066] font-satoshi">Search for products...</p>
        </div>

        <div className="w-24 h-6 md:w-[62px] flex gap-3 sm:gap-[14px]">
            <Image src={NavVector1} alt="" className=" md:hidden block"></Image>
            <Image src={NavVector2} alt=""></Image>
            <Image src={NavVector3} alt=""></Image>
        </div>
      
      </div>
    </div>
  );
}

import Image from "next/image";
import Versace from "../../Assets/versace logo.png"
import Zara from "../../Assets/zara logo.png"
import Gucci from "../../Assets/gucci logo.png"
import Prada from "../../Assets/prada logo.png"
import Calvin from "../../Assets/ck logo (1).png"


export default function LogosSection(){
    return(
        <div className="bg-black h-[146px] lg:h-[122px] p-3 lg:p-11 flex lg:block">
            <div className="mx-auto max-w-[1240px] flex flex-wrap justify-around items-center gap-0 sm-small:gap-10 md:gap-5">
                <Image src={Versace} alt="" className="w-[116px] h-[23px] md:w-[166px] md:h-[33px]"></Image>
                <Image src={Zara} alt="" className="w-[63px] h-[26px] md:w-[91px] md:h-[38px]"></Image>
                <Image src={Gucci} alt="" className="w-[109px] h-[25px] md:w-[156px] md:h-[36px]"></Image>
                <Image src={Prada} alt="" className="w-[127px] h-[21px] md:w-[194px] md:h-[32px]"></Image>
                <Image src={Calvin} alt="" className="w-[134px] h-[21px] md:w-[206px] md:h-[33px]"></Image>
            </div>
        </div>
    )
}
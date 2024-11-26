import Link from "next/link"
import Image from "next/image"
import TopBannerVector from "../../Assets/Top Banner Vector.png"
import React from "react"

export default function TopBanner(){
    return(
        <div className="bg-black text-white text-center py-2 px-2 sm:px-4 xl:px-0 h-[34px] sm:h-[38px]">
            <div className="relative max-w-[1240px] mx-auto">
                <p className="text-xs sm:text-sm font-satoshi">
                Sign up and get 20% off to your first order.
                <Link href={"#"} className="underline font-medium hidden sm-small:inline">
                    Sign Up Now
                </Link>
                </p>
                <div className="w-6 h-6 hidden sm:flex p-1 absolute right-0 top-0">
                <button className=" w-[13px] h-[13px]">
                    <Image src={TopBannerVector} alt=""></Image>
                </button>
                </div>

            </div>
        </div>
    )
}
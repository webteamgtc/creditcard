"use client";
import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const NewHeader = () => {
    return (
        <div className="bg-[#1A1A47] text-center">
            <div className="container mx-auto text-center py-3 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex-1">
                    <Image
                        src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp"
                        width={200}
                        height={72}
                        alt="GTCFX"
                        className="lg:w-[150px] mx-auto lg:h-[62px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
                    />
                </div>
                {/* Language Switch */}
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default NewHeader;

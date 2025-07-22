'use client'

import { useState } from "react";
import Link from "next/link";
import sidebarConfig from "@/lib/data";
import SidebarItem from "./SidebarItem";
import Logo from "./Logo";

export default function SidebarLaptop() {
    const [menu, setMenu] = useState(sidebarConfig);

    return (
        <aside className="relative bg-custom">
            <div className="h-screen *:text-white flex flex-col pb-4">
                <div className="p-4 mb-3 border-b-[1px]">
                    <Logo />
                </div>
                {/* <Link href="/" className="flex p-4 mb-3 no-underline border-b-[1px]">
                    <span className="text-lg font-semibold border-s-2 ps-2">Metabolic Networks Features</span>
                </Link> */}
                <div className="h-full flex flex-col px-4 py-2 gap-4 *:text-[.9rem] *:mb-0 select-none bg-dark-blue overflow-auto scrollbar-hidden">
                    {menu.map((item, index) => <SidebarItem key={index} {...item} />)}
                </div>
            </div>
        </aside>
    )
}
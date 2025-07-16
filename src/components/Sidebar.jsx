'use client'

import { useState } from "react";
import Link from "next/link";
import sidebarConfig from "@/lib/data";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
    const [menu, setMenu] = useState(sidebarConfig);

    return (
        <div className="relative bg-custom">
            <div className="h-screen *:text-white overflow-auto scrollbar-hidden pb-4">
                <Link href="/" className="flex p-4 mb-3 no-underline border-b-[1px]">
                    <span className="text-lg font-semibold border-s-2 ps-2">Metabolic Networks Features</span>
                </Link>
                <div className="flex flex-col px-4 py-2 gap-4 *:text-[.9rem] *:mb-0 select-none bg-dark-blue">
                    {menu.map((item, index) => <SidebarItem key={index} {...item} />)}
                </div>
            </div>
        </div>
    )
}
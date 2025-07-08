'use client'

import { useState } from "react"
import Link from "next/link";
import sidebarConfig from "@/lib/data";
import SidebarItem from "./SidebarItem";
import { FaBars } from "react-icons/fa6";

export default function SidebarMobile() {
    const [show, setShow] = useState(false)
    const [menu, setMenu] = useState(sidebarConfig)

    return (
        <>
            <div className="w-screen flex justify-end fixed p-4">
                <FaBars className="text-2xl" onClick={() => setShow(!show)} />
            </div>
            <div className={`absolute ${show ? '' : '-translate-x-full'} transform w-5/6 bg-custom`}>
                <div className="*:text-white h-screen overflow-auto pb-4">
                    <Link href="/" className="flex p-4 mb-3 no-underline border-b-[1px]">
                        <span className="text-lg font-semibold border-s-2 ps-2">Metabolic Networks Features</span>
                    </Link>
                    <div className="flex flex-col px-4 py-2 gap-4 *:text-[.9rem] *:mb-0 select-none">
                        {menu.map((item, index) => <SidebarItem key={index} {...item} />)}
                    </div>
                </div>
            </div>
        </>
    )
}
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
            <aside className={`absolute ${show ? '' : '-translate-x-full'} transform w-full duration-500`}>
                <div className="absolute w-screen h-screen" onClick={() => setShow(!show)}></div>
                <div className="relative bg-custom w-5/6">
                    <div className="*:text-white h-screen flex flex-col pb-4">
                        <Link href="/" className="flex p-4 mb-3 no-underline border-b-[1px]">
                            <span className="text-lg font-semibold border-s-2 ps-2">Metabolic Networks Features</span>
                        </Link>
                        <div className="h-full flex flex-col px-4 py-2 gap-4 *:text-[.9rem] *:mb-0 select-none overflow-auto">
                            {menu.map((item, index) => <SidebarItem key={index} {...item} />)}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}
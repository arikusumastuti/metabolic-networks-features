'use client'

import { useState } from "react"
import { HiChevronDoubleDown } from "react-icons/hi";

export default function Cover () {
    const [show, setShow] = useState(true);

    return (
        <div className={`${show ? '' : '-translate-y-full'} fixed w-full h-screen bg-custom flex items-center justify-start z-50 duration-500 text-white px-4 md:px-16 xl:px-24 cursor-pointer`} onClick={() => setShow(!show)}>
            <div className="space-y-2">
                <h1 className="text-xl md:text-3xl xl:text-5xl font-extrabold">Metabolic Networks Features</h1>
                <p className="md:text-xl xl:text-2xl">By Ari Kusumastuti</p>
            </div>
            <div className="absolute w-full left-0 bottom-0 flex flex-col items-center justify-center py-12">
                <span className="font-bold mb-2">Click Here</span>
                <HiChevronDoubleDown className="text-5xl text-yellow-300 animate-bounce" />
            </div>
        </div>
    )
}
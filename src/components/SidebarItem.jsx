import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function SidebarItem({text, href, icon, subs}) {
    if (subs.length > 0) {
        const [active, setActive] = useState(false);
        const contentRef = useRef(null);

        useEffect(() => {
            if (contentRef.current) {
                if (active) {
                    contentRef.current.style.maxHeight = `1000px`;
                    contentRef.current.style.visibility = 'visible';
                    contentRef.current.style.opacity = '1';
                } else {
                    contentRef.current.style.maxHeight = '0px';
                    contentRef.current.style.visibility = 'hidden';
                    contentRef.current.style.opacity = '1';
                }
            }
        }, [active]);

        return (
            <div>
                <p className="flex items-center justify-between cursor-pointer" onClick={() => setActive(!active)}>
                    {text}
                    <FaChevronDown className={`${active ? '-rotate-180' : ''} duration-300`} />
                </p>
                <div
                    ref={contentRef}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: '0px', visibility: 'hidden', opacity: '0' }}
                >
                    <div className="flex flex-col ps-4 gap-4 mt-4">
                        {subs.map((sub, index) => (
                            <SidebarItem key={index} {...sub} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <Link className="flex items-center gap-2" href={href ?? '/'}>
                {icon && <span className="text-lg">{icon}</span>}
                {text}
            </Link>
        );
    }
}
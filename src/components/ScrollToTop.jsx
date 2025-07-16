import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

export default function ScrollToTop () {
    const [showScrollToTop, setShowScrollToTop] = useState(false); // State apakah tombol Scroll To Top ditampilkan atau tidak
    
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.pageYOffset != 0)
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div onClick={() => scrollTo(0,0)} className={`${showScrollToTop ? '' : 'hidden'} fixed right-12 bottom-12 w-12 h-12 flex justify-center items-center bg-yellow-300 border-yellow-bg-yellow-300 border-2 text-white rounded-full cursor-pointer`}>
            <FaChevronUp className="text-xl" />
        </div>
    )
}
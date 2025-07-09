import { RingLoader } from "react-spinners";

export default function LoadingScreen () {
    return (
        <div className="flex items-center justify-center top-0 h-[50vh] w-full before:hidden before:w-full before:h-full before:bg-gray-950 before:opacity-50">
            <RingLoader
                color="#162556"
                size={200}
            />
        </div>
    )
}
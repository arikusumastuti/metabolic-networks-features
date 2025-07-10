import { ScaleLoader } from "react-spinners";

export default function LoadingScreen () {
    return (
        <div className="flex items-center justify-center top-0 h-[50vh] w-full before:hidden before:w-full before:h-full before:bg-gray-950 before:opacity-50">
            <ScaleLoader
                color="#162556"
                className="scale-200"
            />
        </div>
    )
}
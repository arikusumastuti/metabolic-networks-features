'use client'

import DisplayData from "@/components/DisplayData";

export default function TM2() {
    const folderId = "1aJOWrPURsYfjmV8LLiRXz_nFEZHGdv4z";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">MinMax Liver TM2</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Features collection obtains from MinMax schemes running within the TM2 features</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
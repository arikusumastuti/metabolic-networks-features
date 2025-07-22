'use client'

import DisplayData from "@/components/DisplayData";

export default function NDD_TM1_TM2() {
    const folderId = "1dQ0UI-zQ9UXjG7DZxTZ5K4qhdYqN9KGL";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">MinMax T2DM NDD+TM1+TM2</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Features collection obtains from MinMax schemes running within the NDD+TM1+TM2 features</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
'use client'

import DisplayData from "@/components/DisplayData";

export default function MetGraph() {
    const folderId = "1mOT6ZD_CT6AQy4hMN5xg_IwX3q3ZLqGI";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">MeanSum Liver MetGraph</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Features collection obtains from MeanSum schemes running within the MetGraph features</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
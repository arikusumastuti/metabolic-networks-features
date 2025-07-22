'use client'

import DisplayData from "@/components/DisplayData";

export default function TM1() {
    const folderId = "1BWHCtCzsRktwaeAUIz0v-rbB_9YVlgFJ";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">MeanSum T2DM TM1</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Features collection obtains from MeanSum schemes running within the TM1 features</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
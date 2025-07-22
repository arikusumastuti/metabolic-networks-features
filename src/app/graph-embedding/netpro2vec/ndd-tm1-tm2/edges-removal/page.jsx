'use client'

import DisplayData from "@/components/DisplayData";

export default function EdgesRemoval() {
    const folderId = "15ru_XZw_jsaJVxspUiTZcnOk10SUo7Ei";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">Netpro2vecNDD+TM1+TM2 Edges Removal</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Features collection obtains from edges removal NDD+TM1+TM2 features using Netpro2vec algorithm</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
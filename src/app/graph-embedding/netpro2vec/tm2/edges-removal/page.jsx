'use client'

import DisplayData from "@/components/DisplayData";

export default function EdgesRemoval() {
    const folderId = "13WgrXyPDoHE9PTd8qfvrr29IU9K02qCq";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">Netpro2vecTM2 Edges Removal</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Features collection obtains from edges removal TM2 features using Netpro2vec algorithm</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
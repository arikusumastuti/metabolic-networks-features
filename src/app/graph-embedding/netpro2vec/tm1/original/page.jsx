'use client'

import DisplayData from "@/components/DisplayData";

export default function Original() {
    const folderId = "1FAS9nKbeFY13PDLX7E01xRFbKzKqpk7B";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">Netpro2vecTM1 Original</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Features collection obtains from original TM1 features using Netpro2vec algorithm</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
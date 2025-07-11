'use client'

import DisplayData from "@/components/DisplayData";

export default function NormalizedEdgesRemoval() {
    const folderId = "1ILzajPfLlfb0Jdwzto1UFw3xtzhrc5O1";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">Netpro2vecNDD+TM1 Normalized Edges Removal</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
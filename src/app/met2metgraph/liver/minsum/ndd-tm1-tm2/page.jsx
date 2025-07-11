'use client'

import DisplayData from "@/components/DisplayData";

export default function NDD_TM1_TM2() {
    const folderId = "1mSjK02hBRGBvQup7eat1ZGpFcUb3Uw4_";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">MinSum Liver NDD+TM1+TM2</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
'use client'

import DisplayData from "@/components/DisplayData";

export default function EdgesRemoval() {
    const folderId = "109aP4zbzD4QGMXDNXLJgEUBHJSFMUHQ5";

    return (
        <div className="relative flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">GL2Vec Edges Removal</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Features collection obtains from edges removal MetGraph features using GL2Vec algorithm</p>
                <DisplayData folderId={folderId} />
            </div>
        </div>
    );
}
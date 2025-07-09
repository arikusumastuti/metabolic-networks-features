export default function FilterTools ({ files, keywordState, pageSizeState, currentPageState}) {
    const [keyword, setKeyword] = keywordState;
    const [pageSize, setPageSize] = pageSizeState;
    const [currentPage, setCurrentPage] = currentPageState;

    return (
        <div className="flex flex-col md:flex-row gap-4 text-left">
            <input onChange={e => setKeyword(e.target.value)} value={keyword} type="text" name="Search" id="search" placeholder="Search..." className="w-full md:w-fit bg-white border rounded-xl px-4 py-2 focus:outline-0" />
            <div className="w-full flex justify-between">
                <div className="w-5/12 xl:w-3/12 flex bg-white border rounded-xl px-4 py-2">
                    <label htmlFor="page_size" className="w-1/2">Page Size: </label>
                    <input id="page_size" type="number" className="w-1/2 ps-2 focus:outline-0" value={pageSize} onChange={e => setPageSize(e.target.value)} />
                </div>
                <div className="flex gap-2 justify-end">
                    {currentPage !=0 ? (
                        <button onClick={() => setCurrentPage(currentPage - 1)} className="bg-blue-950 text-white py-2 px-4 rounded-xl cursor-pointer">Back</button>
                    ) : (
                        <button className="bg-gray-400 text-white py-2 px-4 rounded-xl">Back</button>
                    )}
                    <div className="flex items-center justify-center border bg-white rounded-xl px-4">{currentPage + 1}</div>
                    {(currentPage != Math.floor(files.length / pageSize)) ? (
                        <button onClick={() => setCurrentPage(currentPage + 1)} className="bg-blue-950 text-white py-2 px-4 rounded-xl cursor-pointer">Next</button>
                    ) : (
                        <button className="bg-gray-400 text-white py-2 px-4 rounded-xl">Next</button>
                    )}
                </div>
            </div>
        </div>
    )
}
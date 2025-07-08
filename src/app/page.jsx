'use client'

import { useEffect, useState } from "react";

export default function Overview() {
    const folderId = "1Fte3mX5gCtE2-YVmLGouCMmXp8LxcCit";

    const [isFetchCompleted, setIsFetchCompleted] = useState(false); // Status fetch
    const [files, setFiles] = useState([]); // Data lengkap dari Google Drive
    const [filteredFiles, setFilteredFiles] = useState([]); // Sebagian data dari files yang ingin ditampilkan
    const [displayedFiles, setDisplayedFiles] = useState([]); // Data yang ditampilkan dari filteredFiles
    const [currentPage, setCurrentPage] = useState(0); // Nomor halaman saat ini
    const [pageSize, setPageSize] = useState(50); // Banyak data yang ditampilkan dalam satu halaman
    const [keyword, setKeyword] = useState(''); // Keyword pencarian

    useEffect(() => {
        getData('');
    }, []);
    
    // Penanganan ketika semua data telah diambil
    useEffect(() => {
        if (isFetchCompleted) {
            setFilteredFiles(files);
            setDisplayedFiles(files.slice(pageSize*currentPage, pageSize*(currentPage + 1)));
        }
    }, [isFetchCompleted]);

    // Algoritma pencarian
    useEffect(() => {
        const tempFiles = files.filter((value, index) => value.name.toLowerCase().includes(keyword.toLowerCase()));
        setDisplayedFiles(tempFiles.slice(pageSize*currentPage, pageSize*(currentPage + 1)));
        setFilteredFiles(tempFiles);
    }, [keyword])
    
    // Algoritma pagination
    useEffect(() => {
        setDisplayedFiles(filteredFiles.slice(pageSize*currentPage, pageSize*(currentPage + 1)));
    }, [currentPage, pageSize]);

    // Fungsi untuk mengambil data
    const getData = (nextPageToken) => {
        fetch(`/api/files?folderId=${encodeURIComponent(folderId)}&pageSize=1000&pageToken=${nextPageToken}`)
        .then((res) => res.json())
        .then((data) => {
            if ('files' in data) {
                setFiles(prevFiles => [...prevFiles, ...data.files]);
                if ('nextPageToken' in data) {
                    getData(data.nextPageToken);
                } else {
                    setIsFetchCompleted(true);
                    return
                }
            } else {
                console.log(data);
            }
        });
    }

    return (
        <div className="flex items-center justify-center gap-16 px-8 py-16">
            <div className="w-full text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">Overview</h3>
                <p className="xl:w-2/3 mt-3.5 mx-auto font-medium">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                <p>Total: {files.length}</p>
                <div className="w-full py-8 space-y-8">
                    <div className="flex gap-4 text-left">
                        <input onChange={e => setKeyword(e.target.value)} type="text" name="Search" id="search" placeholder="Search..." className="bg-white border rounded-xl px-4 py-2 focus:outline-0" />
                        <div className="w-full flex justify-between">
                            <div className="w-3/12 flex bg-white border rounded-xl px-4 py-2">
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
                    <div className="grid grid-cols-4 gap-4">
                        {displayedFiles.map(({ id, name, webViewLink}, index) => {
                            return (
                                <a key={index} className="bg-blue-950 text-white p-4 overflow-hidden rounded-2xl" href={webViewLink} target="_blank">
                                    <p>{name}</p>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

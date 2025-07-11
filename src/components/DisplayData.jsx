import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import FilterTools from "./FilterTools";
import ScrollToTop from "./ScrollToTop";

export default function DisplayData ({ folderId }) {
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
        <>
            <p>Total: {files.length}</p>
            <div className="relative w-full mt-8 space-y-8">
                {isFetchCompleted ? (
                    <>
                        <FilterTools files={files} keywordState={[keyword, setKeyword]} pageSizeState={[pageSize, setPageSize]} currentPageState={[currentPage, setCurrentPage]} />
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                            {displayedFiles.map((item, index) => {
                                return (
                                    <Item key={index} {...item} />
                                )
                            })}
                        </div>
                        <ScrollToTop />
                    </>
                ) : <LoadingScreen />}
            </div>
        </>
    )
}

function Item ({ id, name, webViewLink, onClick}) {
    return (
        <a id={id} className="bg-blue-950 text-white p-4 overflow-hidden rounded-2xl" href={webViewLink} target="_blank" onClick={onClick}>
            <p>{name}</p>
        </a>
    )
}
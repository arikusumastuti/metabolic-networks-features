import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SidebarMobile from "@/components/SidebarMobile";

export const metadata = {
    title: "Metabolic Networks Features",
    description: "Metabolic Networks Features",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`antialiased *:scroll-smooth *:duration-300`}
        >
            <header></header>
            <main className="flex">
                <div className="xl:hidden h-screen xl:overflow-hidden w-fit xl:w-1/6 z-10">
                    <div className="fixed xl:hidden w-screen h-0 overflow-visible">
                        <SidebarMobile />
                    </div>
                </div>
                <div className="hidden xl:block w-1/6 xl:fixed">
                    <Sidebar />
                </div>
                <div className="hidden xl:block w-1/6">
                </div>
                <div className="w-full xl:w-5/6 min-h-screen overflow-auto bg-yellow-50">
                    {children}
                </div>
            </main>
            <footer></footer>
        </body>
        </html>
    );
}

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
            className={`antialiased`}
        >
            <header></header>
            <main className="flex h-screen overflow-hidden">
                <div className="fixed xl:hidden w-screen h-0 overflow-visible">
                    <SidebarMobile />
                </div>
                <div className="hidden xl:block w-1/6 h-fit">
                    <Sidebar />
                </div>
                <div className="w-full xl:w-5/6 h-screen overflow-auto bg-yellow-50">
                    {children}
                </div>
            </main>
            <footer></footer>
        </body>
        </html>
    );
}

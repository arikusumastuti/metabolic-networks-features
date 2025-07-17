import Cover from "@/components/Cover";
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
                <Cover />
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
                <div className="w-full xl:w-5/6 min-h-screen flex flex-col overflow-auto bg-yellow-50">
                    <div className="h-full">
                        {children}
                    </div>
                    <footer className="w-full h-16 flex items-center px-8 text-sm">
                        <p>Copyright &copy; 2025 Ari Kusumastuti and Akhmad Roziqin</p>
                    </footer>
                </div>
            </main>
            <footer></footer>
        </body>
        </html>
    );
}

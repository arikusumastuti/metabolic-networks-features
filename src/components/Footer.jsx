import Logo from "./Logo";

export default function Footer () {
    return (
        <footer className="w-full flex flex-col items-center px-8 text-sm pb-4">
            <div className="">
                <Logo />
            </div>
            <div className="">
                <p>Copyright &copy; 2025 Ari Kusumastuti, Isa Irawan, Kistosil Fahim, Mario Rosario Guarracino, and Akhmad Roziqin</p>
            </div>
        </footer>
    )
}
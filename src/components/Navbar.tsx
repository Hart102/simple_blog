// import React, { useRef } from 'react';
// import Logo from "@/assets/images/Logo.png"
// import Button from "./Button";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";




// let anchorTags: { href: string; label: string }[] = [];

// anchorTags = [
//     { href: "home", label: "Home" },
//     { href: "about", label: "About" },
//     { href: "blog", label: "Blog" },
// ]

const Navbar = () => {

    // const navRef = useRef<HTMLDivElement>(null);
    // const [toggle, setToggle] = React.useState<boolean>(false);
    // const [currentPage, setCurrentPage] = React.useState<string>();

    // // Get current page
    // const indicateCurrentPage = (arg: string) => setCurrentPage(arg)

    // const handleToggle = () => {
    //     if (navRef.current) {
    //         if (navRef.current.classList.contains("hidden")) {
    //             navRef.current.classList.remove("hidden")
    //             setToggle(true)
    //             return
    //         }
    //         navRef.current.classList.add("hidden")
    //         setToggle(false)
    //     }
    // }

    // const callBack = (arg: string) => {
    //     handleToggle()
    //     indicateCurrentPage(arg)
    // }

    return (
        <header className="fixed w-[100%] right-0 bg-gray-100 z-10">
            <nav>
                <div className="
                container 
                mx-auto
                flex
                flex-col-reverse
                lg:flex-row
                justify-between
                p-3
                gap-5
                ">
                    <p className="
                    hidden
                    lg:block
                    font-bold">Blog</p>
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="
                        rounded-full
                        border
                        border-slate-300
                        px-3
                        py-2
                        text-sm
                        w-full
                        lg:w-96
                        placeholder-slate-500
                        focus:border-sky-500
                        focus:ring-sky-500
                        focus:ring-1
                        focus:outline-none
                        "/>
                    </div>

                    <div className="flex justify-between">
                        <p className="
                        block 
                        lg:hidden
                        font-bold">Blog</p>

                        <div className="
                        flex
                        font-light
                        gap-8
                        ">
                            <p>Home</p>
                            <p>About</p>
                            <p>Blog</p>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar

// bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600



// rotate animation
// animate-spin h-10 h-10 m-auto" viewBox="0 0 24 24"

// Bounce animation 
// animate-bounce m-auto bg-blue text-center
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";



// let anchorTags: { href: string; label: string }[] = [];

// anchorTags = [
//     { href: "home", label: "Home" },
//     { href: "about", label: "About" },
//     { href: "blog", label: "Blog" },
// ]



const Navbar = () => {

    const navRef = useRef<HTMLDivElement>(null);
    const [toggle, setToggle] = React.useState<boolean>(false);

    const toggleAction = () => {
        if (!toggle) {
            setToggle(true)
            navRef.current?.classList.remove("hidden")
            navRef.current?.classList.add("flex")
        } else {
            setToggle(false)
            navRef.current?.classList.add("hidden")
            navRef.current?.classList.remove("flex")
        }
    }


    return (

        <header className="
        fixed
        w-[100%]
        z-10
        bg-yellow-50
        ">
            {/* Desktop Menu */}
            <div className="
            py-5
            hidden
            container
            mx-auto
            uppercase
            text-sm
            flex-col
            justify-between
            lg:flex-row
            lg:flex
            ">
                <div className="lg:flex gap-20">
                    <p>Trending</p>
                    <p>Latest</p>
                </div>

                <p className="font-bold">Blog</p>

                <div className="lg:flex gap-20">
                    <p>Most Popular</p>
                    <p>Related Post</p>
                </div>
            </div>

            {/* Mobile */}
            <nav className="px-3 py-2 relative block lg:hidden">
                <div className="flex justify-between items-center w-full">
                    <p className="font-bold">Blog</p>
                    <span onClick={toggleAction} className="cursor-pointer">
                        {toggle ? <XMarkIcon className="w-10" /> : <Bars3Icon className="w-10" />}
                    </span>
                </div>
                {/* changeHamburgar */}

                <div className="
                hidden
                flex-col
                gap-8
                absolute
                w-[100%]
                h-[100vh]
                left-0
                top-14
                text-center
                py-20
                bg-yellow-50
                border-t"
                    ref={navRef}>
                    <p>Trending</p>
                    <p>Latest</p>
                    <p>Most Popular</p>
                    <p>Related Post</p>
                </div>
            </nav>
        </header>





        // <header className="fixed w-[100%] right-0 bg-gray-1001 z-10">
        //     <nav>
        //         <div className="
        //         container 
        //         mx-auto
        //         flex
        //         flex-col-reverse
        //         lg:flex-row
        //         justify-between
        //         p-3
        //         gap-5
        //         ">
        //             <p className="
        //             hidden
        //             lg:block
        //             font-bold">Blog</p>
        //             <div>
        //                 <input
        //                     type="text"
        //                     placeholder="Search..."
        //                     className="
        //                 rounded-full
        //                 border
        //                 border-slate-300
        //                 px-3
        //                 py-2
        //                 text-sm
        //                 w-full
        //                 lg:w-96
        //                 placeholder-slate-500
        //                 focus:border-sky-500
        //                 focus:ring-sky-500
        //                 focus:ring-1
        //                 focus:outline-none
        //                 "/>
        //             </div>

        //             <div className="flex justify-between">
        //                 <p className="
        //                 block 
        //                 lg:hidden
        //                 font-bold">Blog</p>

        //                 <div className="
        //                 flex
        //                 font-light
        //                 gap-8
        //                 ">
        //                     <p>Home</p>
        //                     <p>About</p>
        //                     <p>Blog</p>
        //                 </div>
        //             </div>

        //         </div>
        //     </nav>
        // </header>
    )
}

export default Navbar

// bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600



// rotate animation
// animate-spin h-10 h-10 m-auto" viewBox="0 0 24 24"

// Bounce animation 
// animate-bounce m-auto bg-blue text-center
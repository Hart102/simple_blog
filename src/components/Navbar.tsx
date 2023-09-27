import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";
import { Link } from "react-scroll";


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

        <header className="fixed top-0 w-[100%] z-10 bg-yellow-50 cursor-pointer">
            {/* Desktop Menu */}
            <div className="py-5 hidden container mx-auto uppercase text-sm flex-col justify-between lg:flex-row lg:flex">
                <div className="lg:flex gap-20">
                    <Link to="trending">Trending</Link>
                    <Link to="latest" spy={true} smooth={true} offset={-70} duration={500}>latest</Link>
                </div>
                <a href="/" className="font-bold">Blog</a>
                <div className="lg:flex gap-20"> 
                    <Link to="popular" spy={true} smooth={true} offset={-70} duration={500}>Most Popular</Link> 
                    <Link to="#">Related Post</Link> 
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
                <div className="hidden flex-col gap-8 absolute w-[100%] h-[100vh] left-0 top-14 
                text-center py-20 bg-yellow-50 border-t" ref={navRef}>
                    <Link to="trending" spy={true} smooth={true} offset={-70} duration={500}>Trending</Link>
                    <Link to="latest" spy={true} smooth={true} offset={-70} duration={500}>latest</Link>
                    <Link to="popular" spy={true} smooth={true} offset={-70} duration={500}>Popular</Link>
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
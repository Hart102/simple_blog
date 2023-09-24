import FooterImage from "@/assets/images/articles/posts/img2.png"

const Subscribe = () => {
    return (
        <div className="lg:flex min-h-50 items-center">
            {/* Image */}
            <div className="
            h-72
            w-full
            lg:w-2/5
            relative
            ">
                <img
                    className="
                    h-full
                    w-full
                    absolute
                    top-0
                    rounded-tr-3xl1"
                    src={FooterImage}
                    alt={FooterImage}
                />
            </div>

            <div className="
            flex
            flex-col
            gap-6
            px-5
            py-20
            lg:px-20
            lg:py-0
            ">
                <div className="flex items-baseline gap-2">
                    <p className="font-boldtext-blue-500text-2xl">1500+</p>
                    <p className=" text-sm text-neutral-500 ">people have joined us.</p>
                </div>

                <div>
                    <p className=" font-bold text-2xl text-black "> Subscribe Now </p>
                    <p className=" my-1 text-sm text-neutral-500 ">
                        Get various articles about careers and jobs directly to your email. Subscribe now and achieve your success with us
                    </p>
                </div>

                <form className=" flex items-center gap-5 ">
                    <input
                        type="text"
                        placeholder="Enter your email here."
                        className="
                        py-2
                        px-4
                        w-5/6
                        bg-white
                        shadow-lg
                        rounded-2xl
                        outline-none
                        focus:outline-blue-600
                        placeholder:text-gray-500
                        border
                    "/>

                    <button className="
                    bg-orange-500
                    text-white
                    px-5
                    py-2
                    rounded-2xl
                    ">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
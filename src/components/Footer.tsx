import FooterImage from "@/assets/images/articles/posts/img2.png"
import Title from "./_child/Title"

const Footer = () => {
    return (
        <section className="w-full bg-yellow-100">
            {/* Subscribe Now */}
            <div className=" lg:flex min-h-50 items-center">
                {/* Image */}
                <div className=" h-72 w-full lg:w-2/5 relative ">
                    <img
                        className=" h-full w-full absolute top-0 rounded-tr-3xl"
                        src={FooterImage}
                        alt={FooterImage}
                    />
                </div>

                <div className=" flex flex-col gap-6 px-5 py-20 lg:px-20 lg:py-0 ">
                    <div className=" flex items-baseline gap-2 ">
                        <p className=" font-bold text-blue-500 text-2xl ">1500+</p>
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
                        <button className="bg-orange-500 text-white px-5 py-2 rounded-2xl">Subscribe</button>
                    </form>
                </div>
            </div>

            <section className="bg-gray-700 border-t text-neutral-400 text-sm">

                {/* Footer  */}
                <div className="container mx-auto pb-3">
                    <div className=" grid grid-cols-1 gap-10 p-6 align-center lg:grid-cols-3 lg:gap-20 lg:px-0 ">
                        <div>
                            <Title title="blogspot" />
                            <p>Updated and up-to-date online media plateform, followed by more than 5000 poeple globally.</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Title title="services" />
                            <p>Trending</p>
                            <p>Latest</p>
                            <p>Related post</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Title title="contacts" />
                            <span className="font-bold">
                                Email: <p className="font-normal">blogspot@gmail.com</p>
                            </span>
                            <span className="font-bold">
                                Phone: <p className="font-normal">+234 123 456 789</p>
                            </span>
                        </div>
                    </div>
                    <p className="py-5 text-gray-400 text-center">Copyright ©2022 All rights reserved | This template is made with  by Daily Tuition</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </section>
        </section>
    )
}

export default Footer

// lg:bg-[url('../src/assets/images/footer.png')]

{/* <div>
<p className="py-5 text-gray-400">Copyright ©2022 All rights reserved | This template is made with  by Daily Tuition</p>
<p className="text-gray-400 text-center">Terms & Condition</p>
</div> */}
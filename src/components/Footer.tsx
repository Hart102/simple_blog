
const Footer = () => {
    return (
        <section className="
        py-12
        text-sm
        bg-rgba
        lg:bg-[url('../src/assets/images/footer.png')]
        bg-no-repeat
        bg-cover
        ">
            <div className="
            container
            mx-auto
            flex
            flex-col
            items-center
            justify-center
            ">
                <div className="flex justify-center items-center w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="
                        rounded-s-full
                        border
                        border-slate-300
                        px-3
                        py-3
                        text-sm
                        w-[50%]
                        placeholder-slate-500
                        focus:border-sky-500
                        focus:ring-sky-500
                        focus:ring-1
                        focus:outline-none
                        shadow
                    "/>
                    <button className="
                    bg-orange-500
                    text-white
                    px-10
                    py-3
                    my-2
                    uppercase
                    rounded-e-full
                    ">Subscribe</button>
                </div>

                <div>
                    <p className="py-5 text-gray-400">Copyright ©2022 All rights reserved | This template is made with  by Daily Tuition</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
        </section>
    )
}

export default Footer

// lg:bg-[url('../src/assets/images/footer.png')]
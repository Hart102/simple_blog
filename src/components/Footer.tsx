
const Footer = () => {
    return (
        <section className="
        border-t
        py-12
        text-sm
        lg:bg-[url('../src/assets/images/footer.png')]
        bg-contain
        bg-left-bottom
        bg-no-repeat
        bg-gray-100
        ">
            <div className="
            container
            mx-auto
            flex
            flex-col
            items-center
            justify-center
            ">
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
                py-2
                rounded-full
                my-2
                ">Subscribe</button>

                <div>
                    <p className="py-5 text-gray-400">Copyright ©2022 All rights reserved | This template is made with  by Daily Tuition</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
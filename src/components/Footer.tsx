import Title from "@/components/_child/Title"

const Footer = () => {
    return (
        <section className="w-100 bg-yellow-1001 shadow bg-white">
            <div className="text-sm border-t bg-gray-700 text-neutral-400">
                <div className="container mx-auto pb-3">
                    <div className="grid grid-cols-1 gap-10 p-6 align-center lg:px-0 lg:gap-20 lg:grid-cols-3">
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
                            <span className="font-bold">Email: <p className="font-normal">blogspot@gmail.com</p></span>
                            <span className="font-bold">Phone: <p className="font-normal">+234 123 456 789</p></span>
                        </div>
                    </div>
                    <p className="py-5 text-gray-400 text-center">
                        Copyright ©2022 All rights reserved | This template is made with  by Daily Tuition
                    </p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
import Title from "@/components/_child/Title"
import NewsCard from "@/components/_child/NewsCard"
import { Data } from '@/pages/Api/Data';
import Error from './_child/Error';
import MainLayout from "@/pages/Layout/Container";

const Latest = () => {

    if(!Data) return <Error />

    return (
        <section className='w-full py-20'>
            <MainLayout>
                <Title title="Latest Posts" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {Data[1].map((post, index) => (
                        <NewsCard key={index} data={post} gridCols='md:grid-cols-1' titleSize='text-1xl' className='w-96 h-50'/>
                    ))}
                    
                </div>
            </MainLayout>
        </section>
    )
}

export default Latest
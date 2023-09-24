import Related from '@/components/_child/Related'
import Title from '@/components/_child/Title'
import MainLayout from '@/pages/Layout/Container'
import { Data } from '@/pages/Api/Data'
import { childInterface } from './_child/Types'

const SectionContainer = ({ children, title }: childInterface) => {
    return (
        <section className='flex flex-col gap-5 cursor-pointer'>
            <Title title={title} />
            {children}
        </section>
    )
}

const RelatedPosts = () => {
    return (
        <MainLayout>
            <section className='grid gap-10 text-sm py-20 lg:gap-32 lg:grid-cols-2'>
                {/* Business */}
                <SectionContainer title='Business'>
                    {Data[2].map((post, index) => <Related key={index} data={post} />)}
                </SectionContainer>

                {/* Travel */}
                <SectionContainer title='Travel'>
                    {Data[1].map((post, index) => <Related key={index} data={post} />)}
                </SectionContainer>
            </section>
        </MainLayout>
    )
}

export default RelatedPosts

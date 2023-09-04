import Author from '@/components/_child/Author'

interface relatedInterface {
    img: string;
    category: string;
    published: string;
    title: string
}

const Related = ({ img, category, published, title }: relatedInterface) => {
    return (
        <div className="flex gap-10">
            <article>
                <img src={img} alt={img} className='w-60 h-32 rounded' />
            </article>
            <div>
                <div className='flex'>
                    <p className='text-orange-600'>{category}</p>
                    <p className='text-gray-500 hover:text-gray-800'>
                        - {published}
                    </p>
                </div>
                <p className={`font-bold capitalize text-1xl my-3`}>
                    {title}
                </p>
                <Author />
            </div>
        </div>
    )
}

export default Related
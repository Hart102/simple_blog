import Title from "@/components/_child/Title"
import NewsCard from "@/components/_child/NewsCard"
import MainLayout from "@/pages/Layout/Container";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@/components/Pagination";
import { Api } from "@/components/_child/Api";
import Loader from "./_child/Loader";

const Latest = () => {

    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    useEffect(() => {
        const fetchPaosts = async () => {
            setLoading(true);
            const res = await axios.get(
                Api("everything?q=apple&from=2023-09-24&to=2023-09-24&sortBy=popularity")
            );
            setPosts(res.data.articles);
            setLoading(false);
        }

        fetchPaosts();
    }, [])

    
    if(loading) return <Loader />

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page    
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <section className='w-full lg:py-20' id="latest">
            <MainLayout>
                <Title title="Latest Posts" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-b pb-14">
                    {currentPosts && currentPosts.map((post, index) => (
                        <NewsCard 
                            key={index}
                            data={post}
                            titleSize='text-1xl'
                            className='w-96 h-50' 
                            columns='md:grid-cols-1'
                        />
                    ))}
                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </MainLayout>
        </section>
    )
}

export default Latest




// My Google api news key
// f1186362d7a640178ee588925cb8bc91
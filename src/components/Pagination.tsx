// PAGINATION FUNCTION
import { PaginationInterface } from "@/components/_child/Types"

const Pagination = ({ postsPerPage, totalPosts, paginate }: PaginationInterface) => {
    const pageNumbers = [];

    // Getting the page numbers
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex gap-3 mt-10">
            {pageNumbers.map(number => (
                <p key={number} onClick={() => paginate(number)} className="bg-blue-600 px-2 cursor-pointer">{number}</p>
            ))}
        </div>
    )
}

export default Pagination
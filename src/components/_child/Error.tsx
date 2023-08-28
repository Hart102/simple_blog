import ErrorImg from "@/assets/images/not_found.png"

const Error = () => {
    return (
        <div className="text-center py-10">
            <h1 className="text-3xl font-bold text-orange-600 py-10">Something Went Wrong</h1>
            <img src={ErrorImg} alt={ErrorImg} />
        </div>
    )
}

export default Error
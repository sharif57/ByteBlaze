import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";



const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { cover_image, title, description, published_at, id } = blog
    
    return (
        <div className="relative mt-8">
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group   hover:no-underline focus:no-underline bg-gray-900">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />

                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && (
                <div onClick={()=> handleDelete(id)} className="absolute bg-primary p-3 rounded-full hover:scale-105 -top-6 -right-5 cursor-pointer"><FaDeleteLeft
                    size={20}
                    className="text-secondary group-hover:text-secondary "></FaDeleteLeft>
                </div>)}

        </div>
    );
};

export default BlogCard;
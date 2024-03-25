import { Link, useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title, tags, body_html, url } = blog
    return (
        <div>
            <Link className=" mx-auto group border p-2  hover:no-underline focus:no-underline bg-gray-900">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">

                        {
                            tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline  text-gray-900">#{tags}</a>)
                        }

                    </div>

                </div>
                <div className="space-y-2">
                    <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>
            </Link>
        </div>
    );
};

export default Content;
import Link from "next/link"

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-4 flex justify-between items-center">
      <div className="p-8 flex-grow">
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{blog.Title}</h2>
        <p className="mt-2 text-gray-500">Author: {blog.Author}</p>
        <p className="mt-2 text-gray-500">Content: {blog.Content.substring(0, 100)}...</p>
        <p className="mt-2 text-gray-500">Views: {blog.Views}</p>
        <Link href={`/blogpost/${blog.Slug}`} legacyBehavior>
          <a className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 inline-block">
            Read More
          </a>
        </Link>
      </div>
      <div className="flex-none flex items-center justify-center h-full pr-7"> {/* Added right padding here */}
        <img 
          src={`https://picsum.photos/800?random=${Math.floor(Math.random() * 1000)}`} 
          alt="Random" 
          className="w-48 h-48 rounded-md object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default BlogCard

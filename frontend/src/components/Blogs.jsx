import React from "react";
import { FiEye, FiHeart } from "react-icons/fi";
import Title from "./Title";

const blogs = [
  {
    id: 1,
    title: "This Article’s Title goes Here, but not too long.",
    date: "Monday 05, September 2021",
    author: "Author",
    views: 68,
    likes: 86,
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5je2HSfFe97rp0F-3JPxhFUZ8CFEhkF9qv--MF42MAtt7qQe8", // update the path
  },
  {
    id: 2,
    title: "This Article’s Title goes Here, but not too long.",
    date: "Monday 05, September 2021",
    author: "Author",
    views: 68,
    likes: 86,
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5je2HSfFe97rp0F-3JPxhFUZ8CFEhkF9qv--MF42MAtt7qQe8",
  },
  {
    id: 3,
    title: "This Article’s Title goes Here, but not too long.",
    date: "Monday 05, September 2021",
    author: "Author",
    views: 68,
    likes: 86,
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5je2HSfFe97rp0F-3JPxhFUZ8CFEhkF9qv--MF42MAtt7qQe8",
  },
  {
    id: 4,
    title: "This Article’s Title goes Here, but not too long.",
    date: "Monday 05, September 2021",
    author: "Author",
    views: 68,
    likes: 86,
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5je2HSfFe97rp0F-3JPxhFUZ8CFEhkF9qv--MF42MAtt7qQe8",
  },
];

const Blogs = () => {
  return (
    <div className="px-4 md:px-[10%] py-10">
      {/* headings */}
      <div className="mx-auto text-center mb-10">
        <Title line1={"BETTER INFORMATION, BETTER HEALTH"} line2={"News"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex gap-4">
            <img
              src={blog.img}
              alt="blog"
              className="w-[150px] h-[150px] object-cover rounded"
            />
            <div>
              <p className="text-[#14A2F3]">
                {blog.date} | By {blog.author}
              </p>
              <h3 className="text-lg font-semibold mt-2 mb-4">{blog.title}</h3>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FiEye className="text-blue-600" /> {blog.views}
                </span>
                <span className="flex items-center gap-1">
                  <FiHeart className="text-red-500" /> {blog.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

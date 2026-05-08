import React from "react";
import { FiEye, FiHeart } from "react-icons/fi";
import Title from "./Title";

const blogs = [
  {
    id: 1,
    title: "How Regular Checkups Can Save Your Life Early",
    date: "Monday 05, September 2021",
    author: "Dr. Smith",
    views: 68,
    likes: 86,
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Understanding Heart Disease and Prevention Tips",
    date: "Tuesday 12, October 2021",
    author: "Dr. Patel",
    views: 124,
    likes: 102,
    img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "The Importance of Mental Health in Modern Life",
    date: "Friday 22, October 2021",
    author: "Dr. Rana",
    views: 95,
    likes: 78,
    img: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=300&h=300&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Nutrition and Diet: Keys to a Healthy Lifestyle",
    date: "Sunday 14, November 2021",
    author: "Dr. Lama",
    views: 210,
    likes: 175,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop&auto=format",
  },
];

const Blogs = () => {
  return (
    <div className="px-4 md:px-[10%] py-10">
      {/* Heading */}
      <div className="mx-auto text-center mb-10">
        <Title line1={"BETTER INFORMATION, BETTER HEALTH"} line2={"News"} />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer group"
          >
            {/* Image */}
            <div className="w-full sm:w-[140px] h-[200px] sm:h-[140px] flex-shrink-0 overflow-hidden rounded-xl">
              <img
                src={blog.img}
                alt={blog.title}
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${blog.id}/300/300`;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <p className="text-[#14A2F3] text-sm font-medium">
                  {blog.date}
                </p>
                <p className="text-gray-400 text-sm mb-2">By {blog.author}</p>
                <h3 className="text-base font-semibold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                  {blog.title}
                </h3>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
                <span className="flex items-center gap-1">
                  <FiEye className="text-blue-500" />
                  {blog.views} views
                </span>
                <span className="flex items-center gap-1">
                  <FiHeart className="text-red-400" />
                  {blog.likes} likes
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

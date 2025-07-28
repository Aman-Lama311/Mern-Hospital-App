import {
  FaCalendarAlt,
  FaUser,
  FaEye,
  FaHeart,
  FaSearch,
} from "react-icons/fa";
import GetInTouch from "../components/GetInTouch";

const News = () => {
  const blogPosts = [
    {
      id: 1,
      title: "A passion for putting patients first",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et...",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Monday 05, September 2021",
      author: "Author",
      views: 68,
      likes: 86,
    },
    {
      id: 2,
      title: "Advancing healthcare through innovation",
      excerpt:
        "Discover how cutting-edge technology and compassionate care combine to create better patient outcomes. Our commitment to excellence drives every decision we make. Discover how cutting-edge technology and compassionate care combine to create better patient outcomes. Our commitment to excellence drives every decision we make...",
      image:
        "https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_1280.jpg",
      date: "Monday 05, September 2021",
      author: "Author",
      views: 92,
      likes: 124,
    },
    {
      id: 3,
      title: "Building trust through transparency",
      excerpt:
        "Learn how open communication and honest practices form the foundation of exceptional healthcare delivery in our modern medical facilities.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Monday 05, September 2021",
      author: "Author",
      views: 156,
      likes: 203,
    },
    {
      id: 4,
      title: "Excellence in emergency care",
      excerpt:
        "Explore our comprehensive emergency services and how our dedicated team provides rapid, life-saving interventions when every second counts.",
      image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Monday 05, September 2021",
      author: "Author",
      views: 78,
      likes: 95,
    },
    {
      id: 5,
      title: "Community health initiatives",
      excerpt:
        "Discover our outreach programs and community partnerships that extend quality healthcare beyond hospital walls to serve diverse populations.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Monday 05, September 2021",
      author: "Author",
      views: 134,
      likes: 167,
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 4,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 5,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 6,
      title: "This Article's Title goes Here, but not too long.",
      date: "Monday 05, September 2021",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
  ];

  // Show only first 2 blog posts using slice method
  const displayedPosts = blogPosts.slice(0, 2);
  return (
    <>
      <div className="w-full relative">
        <img
          src="https://w7.pngwing.com/pngs/856/829/png-transparent-tamika-cross-black-women-in-medicine-physician-female-african-american-doctors-and-nurses-service-people-team.png"
          loading="lazy"
          alt="about-banner"
          className="w-full h-72 object-cover"
        />
        {/* Light white overlay */}
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <div className="absolute top-[40%] left-40 text-[#192655] z-11">
          <p className="text-2xl">Home/News</p>
          <h1 className="text-4xl font-bold">Blog Posts</h1>
        </div>
      </div>
      <div className="min-h-screen mt-10">
        <div className="px-4 md:px-[10%] py-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {displayedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-[40vw] object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-blue-600" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaUser className="text-blue-600" />
                        <span>By {post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaEye className="text-gray-400" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaHeart className="text-red-500" />
                        <span>{post.likes}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search Box */}
              <div className="bg-blue-900 rounded-lg p-6 mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-blue-800 text-white placeholder-blue-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex space-x-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <p className="text-blue-500 text-sm mb-1">
                          {post.date}
                        </p>
                        <h4 className="text-gray-800 font-medium text-sm leading-tight">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
};
export default News;

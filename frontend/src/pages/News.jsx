import { useState } from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaEye,
  FaHeart,
  FaSearch,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import GetInTouch from "../components/GetInTouch";

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPost, setExpandedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});

  const blogPosts = [
    {
      id: 1,
      title: "A Passion for Putting Patients First",
      excerpt:
        "At the heart of our hospital is a deep commitment to patient-centered care. Every decision we make is guided by one question: what is best for our patients?",
      fullContent:
        "At the heart of our hospital is a deep commitment to patient-centered care. Every decision we make — from staffing to treatment protocols — is guided by one question: what is best for our patients? Our team of doctors, nurses, and support staff work around the clock to ensure comfort, dignity, and the best possible outcomes for every individual who walks through our doors. We believe that healing goes beyond medicine. It involves emotional support, clear communication, and treating every patient as a unique individual with their own story, fears, and hopes. Our patient advocacy team works directly with families to ensure they are informed and comfortable at every stage of treatment. From the moment you check in to the moment you leave, our goal is to make you feel safe, heard, and cared for.",
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=500&fit=crop&auto=format",
      date: "Monday 05, September 2021",
      author: "Dr. Smith",
      views: 68,
      likes: 86,
      category: "General Health",
    },
    {
      id: 2,
      title: "Advancing Healthcare Through Innovation",
      excerpt:
        "Modern medicine is evolving at an incredible pace, and our hospital is at the forefront of that change with AI-assisted diagnostics and minimally invasive techniques.",
      fullContent:
        "Modern medicine is evolving at an incredible pace, and our hospital is at the forefront of that change. From AI-assisted diagnostics to minimally invasive surgical techniques, we continuously invest in the latest technology to give our patients faster diagnoses, safer procedures, and quicker recoveries. Innovation is not just a buzzword here — it is a daily commitment to better care. Our research department collaborates with leading universities and medical institutions around the world to test and implement cutting-edge treatments. Recently, we introduced robotic-assisted surgery in our orthopedic and cardiac departments, reducing recovery times by up to 40%. We are also piloting a telemedicine platform that allows patients in remote areas to consult with our specialists from the comfort of their homes. The future of healthcare is here, and we are proud to be leading the way.",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=800&h=500&fit=crop&auto=format",
      date: "Tuesday 12, October 2021",
      author: "Dr. Patel",
      views: 92,
      likes: 124,
      category: "Cardiology",
    },
    {
      id: 3,
      title: "Building Trust Through Transparency",
      excerpt:
        "Open communication and honest practices form the foundation of exceptional healthcare delivery in our modern medical facilities.",
      fullContent:
        "Open communication and honest practices form the foundation of exceptional healthcare delivery in our modern medical facilities. We believe patients deserve to know exactly what is happening with their health — in clear, simple language, not medical jargon. Our doctors are trained not just in clinical excellence but in compassionate communication. Every patient receives a detailed care plan they can understand, and our staff are always available to answer questions. We also publish our outcomes data publicly, including surgery success rates and patient satisfaction scores, because we believe accountability builds trust. When mistakes happen — as they occasionally do in any healthcare setting — we address them openly and use them as opportunities to improve. Trust is not given; it is earned every single day.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop&auto=format",
      date: "Friday 22, October 2021",
      author: "Dr. Rana",
      views: 156,
      likes: 203,
      category: "General Health",
    },
    {
      id: 4,
      title: "Excellence in Emergency Care",
      excerpt:
        "Our dedicated emergency team provides rapid, life-saving interventions when every second counts, 24 hours a day, 7 days a week.",
      fullContent:
        "Our dedicated emergency team provides rapid, life-saving interventions when every second counts, 24 hours a day, 7 days a week. The emergency department is staffed by board-certified emergency physicians, trauma nurses, and specialist consultants who are ready to respond to any situation — from minor injuries to life-threatening emergencies. We have invested heavily in reducing wait times, and our average door-to-doctor time is under 10 minutes. Our trauma bay is equipped with state-of-the-art monitoring and resuscitation equipment. We also run a community first aid training program so that local residents can respond effectively in emergencies before ambulances arrive. Because in an emergency, every second truly does count — and preparation saves lives.",
      image:
        "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&h=500&fit=crop&auto=format",
      date: "Sunday 14, November 2021",
      author: "Dr. Lama",
      views: 78,
      likes: 95,
      category: "Emergency Care",
    },
    {
      id: 5,
      title: "Community Health Initiatives",
      excerpt:
        "Our outreach programs and community partnerships extend quality healthcare beyond hospital walls to serve diverse populations.",
      fullContent:
        "Our outreach programs and community partnerships extend quality healthcare beyond hospital walls to serve diverse populations across the region. We run monthly free health camps in underserved areas, providing basic checkups, vaccinations, and health education to thousands of people who might otherwise have no access to medical care. Our mobile clinic travels to remote villages twice a week, staffed by volunteer doctors and nurses from our hospital. We also partner with local schools to run health awareness programs for children, teaching them about hygiene, nutrition, and mental wellness from an early age. Community health is not just about treating illness — it is about preventing it. And we believe that a healthier community means a healthier future for everyone.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&auto=format",
      date: "Monday 29, November 2021",
      author: "Dr. Gurung",
      views: 134,
      likes: 167,
      category: "Mental Health",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "How Regular Checkups Save Lives",
      date: "Monday 05, September 2021",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Understanding Heart Disease Prevention",
      date: "Tuesday 12, October 2021",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=100&h=100&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Mental Health Awareness in Modern Life",
      date: "Friday 22, October 2021",
      image:
        "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=100&h=100&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Emergency Response: What You Should Know",
      date: "Sunday 14, November 2021",
      image:
        "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=100&h=100&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Nutrition Tips for a Healthier You",
      date: "Monday 29, November 2021",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "The Future of Hospital Technology",
      date: "Friday 10, December 2021",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=100&h=100&fit=crop&auto=format",
    },
  ];

  const categories = [
    { name: "Cardiology", count: 12 },
    { name: "Emergency Care", count: 8 },
    { name: "Mental Health", count: 15 },
    { name: "Nutrition", count: 10 },
    { name: "General Health", count: 20 },
  ];

  // Search filter
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Toggle expand/collapse post
  const toggleExpand = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  // Toggle like
  const toggleLike = (id) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Get like count
  const getLikeCount = (post) => {
    if (likedPosts[post.id] === true) return post.likes + 1;
    return post.likes;
  };

  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1400&h=400&fit=crop&auto=format"
          loading="lazy"
          alt="news-banner"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-white/50 z-10"></div>
        <div className="absolute top-[40%] left-6 sm:left-20 md:left-40 text-[#192655] z-11">
          <p className="text-lg sm:text-2xl">Home / News</p>
          <h1 className="text-3xl sm:text-4xl font-bold">Blog Posts</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen mt-10">
        <div className="px-4 md:px-[10%] py-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {/* Results count */}
              {searchQuery && (
                <p className="text-gray-500 text-sm mb-6">
                  {filteredPosts.length} result
                  {filteredPosts.length !== 1 ? "s" : ""} found for{" "}
                  <span className="font-semibold text-blue-600">
                    "{searchQuery}"
                  </span>
                </p>
              )}

              {/* No results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl shadow-md">
                  <FaSearch className="text-gray-300 text-5xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-500">
                    No posts found
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Try searching with a different keyword
                  </p>
                </div>
              )}

              {filteredPosts.map((post) => {
                const isExpanded = expandedPost === post.id;
                const isLiked = likedPosts[post.id];

                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Post Image */}
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        onError={(e) => {
                          e.target.src = `https://picsum.photos/seed/${post.id}news/800/500`;
                        }}
                        className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6">
                      {/* Category badge */}
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {post.category}
                      </span>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-3">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-blue-600" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUser className="text-blue-600" />
                          <span>By {post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaEye className="text-gray-400" />
                          <span>{post.views} views</span>
                        </div>
                        {/* ✅ Functional like button */}
                        <button
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center gap-1 transition-all duration-200 cursor-pointer ${
                            isLiked
                              ? "text-red-500 scale-110"
                              : "text-gray-400 hover:text-red-400"
                          }`}
                        >
                          <FaHeart />
                          <span>{getLikeCount(post)}</span>
                        </button>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                        {post.title}
                      </h2>

                      {/* Excerpt always shown */}
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      {/* ✅ Full content shown when expanded */}
                      {isExpanded && (
                        <div className="mt-2 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fadeIn">
                          <p>{post.fullContent}</p>
                        </div>
                      )}

                      {/* ✅ Read More / Show Less button */}
                      <button
                        onClick={() => toggleExpand(post.id)}
                        className="mt-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Show Less <FaChevronUp />
                          </>
                        ) : (
                          <>
                            Read More <FaChevronDown />
                          </>
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* ✅ Functional Search */}
              <div className="bg-blue-900 rounded-2xl p-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-blue-800 text-white placeholder-blue-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
                </div>
                {/* Clear search */}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-3 text-blue-300 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    ✕ Clear search
                  </button>
                )}
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-6 pb-2 border-b border-gray-100">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-3 group cursor-pointer"
                    >
                      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          onError={(e) => {
                            e.target.src = `https://picsum.photos/seed/${post.id}recent/100/100`;
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-blue-500 text-xs mb-1">
                          {post.date}
                        </p>
                        <h4 className="text-gray-800 font-medium text-sm leading-tight group-hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Functional Categories — filters posts */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b border-gray-100">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        setSearchQuery(searchQuery === cat.name ? "" : cat.name)
                      }
                      className={`flex justify-between items-center py-2 px-3 rounded-lg border border-transparent cursor-pointer transition-all duration-200 ${
                        searchQuery === cat.name
                          ? "bg-blue-600 text-white border-blue-600"
                          : "hover:bg-blue-50 hover:border-blue-200 text-gray-700"
                      }`}
                    >
                      <span className="text-sm font-medium">{cat.name}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          searchQuery === cat.name
                            ? "bg-white text-blue-600"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {cat.count}
                      </span>
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

import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the latest trends shaping the future of web development, from AI-driven interfaces to WebAssembly innovations.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      category: "Web Development"
    },
    {
      title: "Building Scalable Mobile Apps: Best Practices and Pitfalls",
      excerpt: "Learn the essential strategies for developing scalable mobile applications and common pitfalls to avoid.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Michael Chen",
      date: "March 12, 2025",
      category: "App Development"
    },
    {
      title: "The Impact of AI on Modern UI/UX Design",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we approach user interface and experience design.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emily Rodriguez",
      date: "March 10, 2025",
      category: "UI/UX Design"
    },
    {
      title: "Digital Transformation: A Guide for Business Leaders",
      excerpt: "A comprehensive guide to leading successful digital transformation initiatives in your organization.",
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "David Wilson",
      date: "March 8, 2025",
      category: "IT Consulting"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TechNova Blog</h1>
            <p className="text-xl text-blue-100">
              Insights, trends, and expert perspectives on technology and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates in technology and digital innovation.
            </p>
            
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button variant="primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
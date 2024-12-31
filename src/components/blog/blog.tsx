import Image from "next/image";
import React from "react";

// Sample blog data with images
const blogPosts = [
  {
    id: 1,
    title: "Understanding React Lifecycle Methods",
    description:
      "In this post, we dive deep into the React lifecycle methods and how they are used in functional and class components...",
    image: "", // Example image URL
    link: "/blog/understanding-react-lifecycle-methods",
  },
  {
    id: 2,
    title: "Mastering CSS Grid for Modern Layouts",
    description:
      "CSS Grid is a powerful tool for creating complex layouts with ease. Learn how to build responsive layouts using CSS Grid...",
    image: "", // Example image URL
    link: "/blog/mastering-css-grid",
  },
  {
    id: 3,
    title: "Building a Full-Stack Application with Next.js and MongoDB",
    description:
      "Learn how to build a full-stack application using Next.js for the front end and MongoDB for the back end. This post will guide you through the entire process...",
    image: "", // Example image URL
    link: "/blog/full-stack-nextjs-mongodb",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="w-full py-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold  text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition duration-300"
            >
              <Image
                height={200}
                width={200}
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a
                href={post.link}
                className="inline-block text-blue-500 font-semibold hover:text-blue-700"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

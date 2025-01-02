/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBlog } from "@/utils/api/blogApi";
import Image from "next/image";
import React from "react";

const BlogSection = async () => {
  const blogPosts = await fetchBlog();
  return (
    <section className="w-full  ">
      <div className="  ">
        <h2 className="text-3xl font-bold  text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.length == 0 ? (
            <h1 className="text-center">No Blog added</h1>
          ) : (
            blogPosts?.map((post: any) => (
              <div
                key={post._id}
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
                <p className="text-gray-600 mb-4">
                  {post.description.length > 20
                    ? `${post.description.slice(0, 150)}...`
                    : post.description}
                </p>{" "}
                <a
                  href={post.link}
                  className="inline-block text-blue-500 font-semibold hover:text-blue-700"
                >
                  Read More
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBlog } from "@/utils/api/blogApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSection = async () => {
  const blogPosts = await fetchBlog();

  return (
    <section className="w-full py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.length === 0 ? (
            <h1 className="text-center text-xl text-gray-600">
              No Blogs Added
            </h1>
          ) : (
            blogPosts?.map((post: any) => (
              <div
                key={post._id}
                className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <Image
                  height={200}
                  width={200}
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      post?.content?.length > 150
                        ? `${post?.content?.slice(0, 150)}...`
                        : post.content,
                  }}
                />

                <Link
                  href={`Blog/${post._id}`}
                  className="inline-block text-blue-500 font-semibold hover:text-blue-700"
                >
                  Read More
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

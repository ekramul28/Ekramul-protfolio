/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchSingleBlog } from "@/utils/api/blogApi";
import React from "react";

const BlogDetails = async ({ params }: any) => {
  const { id } = params;
  const blog = await fetchSingleBlog(id);
  return (
    <div className="m-10">
      <div
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />
    </div>
  );
};

export default BlogDetails;

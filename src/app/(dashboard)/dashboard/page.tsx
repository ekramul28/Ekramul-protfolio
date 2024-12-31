"use client";
import Image from "next/image";
import React, { useState } from "react";

const AddBlog = () => {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFiles = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages(imageFiles);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      images,
      link,
      title,
      description,
    };
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-14  ">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Add Your Blog
      </h1>
      <p className="text-gray-600 text-center mt-2 mb-6">
        Share your thoughts, ideas, and stories with the world. Fill out the
        form below to create a new blog post.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 rounded-lg shadow-md"
      >
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        {/* Link */}
        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Link
          </label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
            required
          />
        </div>

        {/* Image Upload */}
        <div className="md:col-span-2">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Images
          </label>
          <input
            type="file"
            id="images"
            onChange={handleImageChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <div className="mt-2 grid grid-cols-3 gap-2">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                height={40}
                width={40}
                alt={`Product Image ${index + 1}`}
                className="w-full h-auto rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;

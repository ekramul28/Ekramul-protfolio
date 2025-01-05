export const fetchBlog = async () => {
  try {
    const blogRes = await fetch(
      "https://protfolio-server-dun.vercel.app/blogs"
    );
    if (!blogRes.ok) {
      throw new Error(`HTTP error! status: ${blogRes.status}`);
    }
    const blogs = await blogRes.json();
    return blogs; // Returning the fetched data
  } catch (error) {
    console.error("Error fetching skills:", error);
    return []; // Return an empty array if there's an error
  }
};
export const fetchSingleBlog = async (id: string) => {
  try {
    const blogRes = await fetch(
      `https://protfolio-server-dun.vercel.app/blogs/${id}`
    );
    if (!blogRes.ok) {
      throw new Error(`HTTP error! status: ${blogRes.status}`);
    }
    const blog = await blogRes.json();
    return blog; // Returning the fetched data
  } catch (error) {
    console.error("Error fetching skills:", error);
    return []; // Return an empty array if there's an error
  }
};

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFormStatus } from "react-dom";
import { useState, useId } from "react";

// PostItem component
const PostItem = ({ post }) => {
  return (
    <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

// SubmitButton component
const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  console.log(pending);
  console.log(data);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

// PostForm component
const PostForm = ({ addPost }) => {
  const id = useId();
  const formAction = async (formData) => {
    // Simulate a delay of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // We have direct access to the form data
    const newPost = {
      title: formData.get(`${id}-title`),
      body: formData.get(`${id}-body`),
    };

    addPost(newPost);
  };

  return (
    <form
      action={formAction}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={`${id}-title`}
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={`${id}-title`}
          type="text"
          placeholder="Enter title"
          name={`${id}-title`}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={`${id}-body`}
        >
          Body
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={`${id}-body`}
          rows="5"
          placeholder="Enter body"
          name={`${id}-body`}
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <SubmitButton />
      </div>
    </form>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <>
      <PostForm addPost={addPost} />
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </>
  );
};
export { Posts as UseFormStatusExample };

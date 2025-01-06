/* eslint-disable no-unused-vars */
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

async function updateName(name) {
  console.log("updateName", name);

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });

  return null;
}

const Button = () => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button
        type="submit"
        disabled={pending}
        className={`w-full px-4 py-2 text-lg font-semibold text-white rounded-lg shadow-md 
                ${
                  pending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                }
                transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
      >
        {pending ? "Updating..." : "Update"}
      </button>
  )
}

export const UpdateNameActionState = () => {
  const [error, submitAction, isPending] = useActionState(
    async (_prevState, formData) => {
      console.log('🐔 =>  _prevState:', _prevState);
      console.log('🐔 =>  formData:', formData);
      const error = await updateName(formData.get("name"));
      console.log('🐔 =>  error:', error);

      if (error) {
        return error;
      }
    },
    null
  );
  console.log("Pending:", isPending);

  return (
    <form
      className="flex flex-col gap-y-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
      action={submitAction}
    >
      <div className="flex items-center">
        <label
          className="w-1/4 text-lg font-medium text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-3/4 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className={`w-full px-4 py-2 text-lg font-semibold text-white rounded-lg shadow-md 
                ${
                  isPending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-700"
                }
                transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
      >
        {isPending ? "Updating..." : "Update"}
      </button>

      {/* <Button /> */}
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </form>
  );
};

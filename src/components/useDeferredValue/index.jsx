import { useState, useDeferredValue } from "react";
import SlowList from "./SlowList";

const List = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="flex flex-col items-center p-6 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <SlowList text={deferredQuery} />
    </div>
  );
};

export { List as UseDeferredValue };

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Search blogs"
      />
      <FaSearch className="absolute right-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none" />
    </div>
  );
}

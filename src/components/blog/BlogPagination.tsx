import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 text-sm font-medium bg-gray-300 dark:bg-gray-700 rounded-lg 
                   disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        aria-label="Previous Page"
      >
        <FaArrowLeft className="mr-2" /> Prev
      </button>

      <span className="px-4 py-2 text-sm font-semibold bg-gray-200 dark:bg-gray-800 rounded-lg">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 text-sm font-medium bg-gray-300 dark:bg-gray-700 rounded-lg 
                   disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        aria-label="Next Page"
      >
        Next <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
}

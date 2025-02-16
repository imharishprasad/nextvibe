import { motion } from "framer-motion";
import { Blog } from "@/types/Types";


export default function BlogOverlay({
  blog,
  onClose,
}: {
  blog: Blog;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-2xl w-full"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold">{blog.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{blog.content}</p>
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

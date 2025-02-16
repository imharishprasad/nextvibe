"use client";

import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-2 px-1 py-1 m-2 rounded-lg transition-all duration-200 
        ${
          clicked
            ? "bg-green-600 scale-110"
            : "bg-green-500 hover:bg-green-600 active:scale-95"
        } text-white shadow-md`}
    >
      <FaThumbsUp className="text-xl" />
      <span className="text-base md:text-lg font-medium">Like ({likes})</span>
    </button>
  );
}

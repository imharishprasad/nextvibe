"use client";

import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

export default function CopyButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy Link"}
      className="relative"
    >
      {copied ? (
        <FaCheck className="text-green-500 text-xl transition-colors" />
      ) : (
        <FaCopy className="text-gray-600 dark:text-gray-300 text-xl hover:text-green-500 transition-colors" />
      )}
      {copied && (
        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs bg-gray-800 text-white px-2 py-1 rounded shadow">
          Copied!
        </span>
      )}
    </button>
  );
}

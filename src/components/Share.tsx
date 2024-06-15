"use client";

import React from "react";
import { IoMdShare } from "react-icons/io";

const Share = () => {
  const handleShare = () => {
    const url = window.location.toString()
    try {
      if (navigator.share) {
        navigator.share({
          title: "GitBoard",
          text: `Check me out on GitBoard\n\n${url}`
        });
      }
    } catch (error) {
      alert("Oops! Something went wrong. Try again");
    }
  };
  return (
    <button
      onClick={handleShare}
      className="bg-white px-6 py-2 rounded absolute right-2 top-2 md:right-4 md:top-4 text-purple-700 flex items-center gap-2 text-sm"
    >
      <span className="hidden sm:block">Share </span><IoMdShare />
    </button>
  );
};

export default Share;

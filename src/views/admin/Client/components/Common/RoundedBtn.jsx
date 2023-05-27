import React from "react";

function RoundedBtn({ icon, onClick }) {
  return (
    <button
      className="text-[#9c9c9c] text-xl p-2 rounded-full hover:bg-[#e9e6ff]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default RoundedBtn;

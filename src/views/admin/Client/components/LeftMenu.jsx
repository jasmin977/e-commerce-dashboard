import React, { useState } from "react";
import Chats from "./Chats";
import RoundedBtn from "./Common/RoundedBtn";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/whatsapp";

function LeftMenu() {
  const [filter, setFilter] = useState(false);

  return (
    // LeftMenu container
    <div className="flex flex-col h-[550px] w-100">
      {/* Profile nav */}
      <div className="flex justify-end items-center bg-[#ffffff] h-[60px] p-3">
        {/* Profile picture */}

        {/* Profile nav buttons */}
        <div className="flex justify-between w-[175px]">
          <RoundedBtn icon={<MdPeopleAlt />} />
          <RoundedBtn icon={<TbCircleDashed />} />
          <RoundedBtn icon={<BsFillChatLeftTextFill />} />
        </div>
      </div>

      {/* Search and filter */}
      <div className="flex justify-between items-center h-[60px] p-2">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="rounded-lg bg-[#eff3fd] text-[#343435] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
        />

        {/* Filter button */}
        <button
          className={`text-2xl m-2 p-1 rounded-full ${
            filter
              ? "bg-[#e9e6ff] text-white rounded-full hover:bg-[#e9e6ff]"
              : "text-[#8796a1] hover:bg-[#dedaff]"
          }`}
          onClick={() => setFilter(!filter)}
        >
          <BiFilter />
        </button>
      </div>

      {/* Chats */}
      <Chats filter={filter} />
    </div>
  );
}

export default LeftMenu;

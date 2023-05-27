import React from "react";

function Message({ msg, time, isLink, img, sent }) {
  return (
    // Message container
    <div
      className={`flex justify-center items-center rounded-md w-fit my-1 ${
        sent ? "bg-[#7551FF] ml-auto" : "bg-[#E9E3FF] mr-auto"
      }`}
    >
      {/* Image message */}
      {img ? (
        <div className="relative p-2 w-100">
          {/* Image */}
          <img
            src={img}
            alt="img_message"
            className="rounded-md max-w-[270px] w-100"
          />
          {/* Time */}
          <p
            className={` text-white ${
              sent ? "text-white" : "text-[#8796a1]"
            } absolute right-2 bottom-3 text-[10px] min-w-[50px]`}
          >
            {time}
          </p>
        </div>
      ) : (
        // Text (link/normal) message
        <div
          className="flex justify-between items-end max-w-[410px] p-2"
          style={{ wordBreak: "break-word" }}
        >
          {/* Link */}
          {isLink ? (
            <a
              href={msg}
              target="blank"
              className="text-[#7551FF] hover:text-[#6242e0] focus:text-[#7551FF] active:text-[#7551FF] text-sm underline hover:underline mr-2"
            >
              {msg}
            </a>
          ) : (
            // Normal text
            <p className={`mr-2 text-sm ${sent ? "text-white" : "text-black"}`}>
              {msg}
            </p>
          )}
          <p
            className={`  ${
              sent ? "text-[#e5ecf1]" : "text-[#8796a1]"
            }  text-[10px] min-w-[50px]`}
          >
            {time}
          </p>
        </div>
      )}
    </div>
  );
}

export default Message;

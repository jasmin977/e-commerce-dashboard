import { useColorModeValue } from "@chakra-ui/system";

function Chat({ pp, contact, msg, time, unreadMsgs, active }) {
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  return (
    // Chat container
    <div
      className={`flex w-full justify-start items-center cursor-pointer border-t border-[#c7b4fc] h-[85px] px-3 hover:bg-[#EDF2F7] ${
        active ? "bg-[#EDF2F7]" : ""
      }`}
    >
      {/* Profile picture */}
      <img
        src={pp}
        alt="profile_picture"
        className="rounded-full w-[50px] mr-5"
      />

      {/* Info container */}
      <div className="flex justify-between w-full py-3 h-100">
        {/* Contact name and message */}
        <div className="flex flex-col justify-start text-[#2D3748]">
          {/* Contact name */}
          <h1 className="mb-1 font-medium">{contact}</h1>

          {/* Message */}
          <p className={`text-sm ${!unreadMsgs ? "text-neutral-400" : ""}`}>
            {msg}
          </p>
        </div>

        {/* Time and number of messages*/}
        <div className="flex flex-col items-end justify-between text-xs h-100">
          {/* Time */}
          <p className="text-[#422AFB] min-w-[55px]">{time}</p>

          {/* Number of messages */}
          {unreadMsgs && (
            <div className="flex justify-center items-center bg-[#422AFB] rounded-full w-[20px] h-[20px]">
              <p className="text-[#f4f4f7]">{unreadMsgs}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;

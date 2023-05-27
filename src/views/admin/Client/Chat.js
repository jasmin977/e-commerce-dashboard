import React, { useState, useEffect } from "react";
import LeftMenu from "./components/LeftMenu";
import ChatDetail from "./components/ChatDetail";
import LoadingScreen from "./components/LoadingScreen";

function ChatPage() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 7;
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);

  return (
    <>
      {loading ? (
        <LoadingScreen progress={progress} />
      ) : (
        // main app container
        <div className="pt-12 overflow-hidden ">
          {/* 2 components cointainer */}
          <div className="flex justify-start">
            {/* LeftMenu */}
            <div className="bg-[#ffffff] min-w-[340px] max-w-[300px] w-100 h-100">
              <LeftMenu />
            </div>

            {/* ChatDetail */}
            <div className="bg-[#ffffff] min-w-[780px]  ">
              <ChatDetail />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatPage;

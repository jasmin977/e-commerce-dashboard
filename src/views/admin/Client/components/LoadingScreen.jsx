import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import { FaLock } from "react-icons/fa";

function LoadingScreen({ progress }) {
  return (
    <div className="flex flex-col items-center justify-center pt-32 ">
      {/* WhatsApp Icon */}

      {/* Loading bar and text */}
      <div className="flex flex-col justify-evenly items-center h-[150px]">
        {/* Loading bar */}

        <Flex height={"xl"} align={"center"} justify={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brand.500"
            size="xl"
          />
        </Flex>

        {/* Text section */}
        <div className="flex flex-col items-center">
          {/* WhatsApp name */}
          <h1 className="text-[#c1c6c9] text-lg font-medium">Loading chat..</h1>

          {/* Text */}
          <div className="flex items-center text-[#687782]">
            {/* Lock */}
            <span className="mr-3 text-sm">
              <FaLock />
            </span>

            {/* Text */}
            <p>End-to-end encrypted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;

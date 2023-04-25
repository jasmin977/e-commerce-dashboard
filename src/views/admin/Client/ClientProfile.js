// Chakra imports
import { Box } from "@chakra-ui/react";

// Custom components
import Banner from "./components/Banner";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";
import { useLocation } from "react-router-dom";

export default function ClientProfile() {
  const location = useLocation();
  const { address, email, gender, name, phoneNumber } = location.state;

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}

      <Banner
        gridArea="1 / 1  / 2 / 2"
        banner={banner}
        avatar={avatar}
        name={name}
        number={phoneNumber}
        address={address}
        gender={gender}
        email={email}
        orders="17"
        reviews="9"
        products="27"
      />
    </Box>
  );
}

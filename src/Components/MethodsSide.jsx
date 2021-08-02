import { getMethods } from "../services/api";
import { useState, useEffect } from "react";
import PersonalSide from "./PersonalSide";
import MethodItem from "./MethodItem";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";

const MethodsSide = () => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    getMethods().then((newMethods) => setMethods(newMethods));
  }, []);

  return (
    <>
      <Flex justifyContent="center">
        <SideBar />
        <Box justifyContent="center" alignItems="center" overflowX="hidden">
          {methods.map((method) => {
            return <MethodItem method={method} />;
          })}
          <PersonalSide methods={methods} />
        </Box>
      </Flex>
    </>
  );
};

export default MethodsSide;

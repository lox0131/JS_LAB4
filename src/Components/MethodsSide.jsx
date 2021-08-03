import { useState, useEffect } from "react";
import MethodItem from "./MethodItem";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { Method } from "../context/MethodContext";
import SideBar from "./SideBar";
import Header from "./Header";
import { v4 as uuidv4 } from 'uuid'

const MethodsSide = () => {
  const { methods } = Method();

  useEffect(() => {
    setFilteredMethods(methods);
  }, [methods]);

  const [filteredMethods, setFilteredMethods] = useState(methods);

  const filterMethods = (value) => {
    const result = methods?.filter((method) =>
      method.title.toLowerCase().includes(value)
    );
    setFilteredMethods(result);
  };

  const [isLargerThan] = useMediaQuery("(min-width:765px)");

  return (
    <>
      <Header filterMethods={filterMethods} />
      <Flex justifyContent="center" overscrollBehavior="smooth">
        {isLargerThan ? <SideBar /> : <></>}
          <Box>
            {filteredMethods.map((method) => (
              <MethodItem method={method} key={uuidv4()} />
            ))}
          </Box>
      </Flex>
    </>
  );
};

export default MethodsSide;

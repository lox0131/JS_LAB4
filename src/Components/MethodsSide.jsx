import { getMethods } from "../services/api";
import { useState, useEffect, useContext } from "react";
import PersonalSide from "./PersonalSide";
import MethodItem from "./MethodItem";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import SideBar from "./SideBar";
import Header from "./Header"
import SearchBar from "./SearchBar";

const MethodsSide = () => {
  const [methods, setMethods] = useState([]);
  const [filteredMethods, setFilteredMethods] = useState([]);

  useEffect(() => {
    getMethods().then(
      (newMethods) => setMethods(newMethods),
    );
    getMethods().then((newMethods) => setFilteredMethods(newMethods))
  }, []);

  const filterMethods = (value) => {
    const result = methods?.filter((method) =>
      method.title.toLowerCase().includes(value)
    );
    setFilteredMethods(result);
  };

  const [isLargerThan] = useMediaQuery("(min-width:765px)");

  return (
    <>
      <Header sx={{ position: "sticky", top: "0" }} filterMethods={filterMethods} />
      <Flex justifyContent="center">
        {isLargerThan ? <SideBar /> : <></>}
        <Box>
          {filteredMethods.map((method) => {
            return <MethodItem method={method} />;
          })}
          <PersonalSide methods={methods} />
        </Box>
      </Flex>
    </>
  );
};

export default MethodsSide;

import { getMethods } from '../services/api'
import { useState, useEffect } from 'react';
import PersonalSide from './PersonalSide'
import SideBar from './SideBar'
import MethodItem from './MethodItem'
import {  Box } from "@chakra-ui/react";

const MethodsSide = () => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    getMethods().then((newMethods) => setMethods(newMethods));
  }, [])

  return (
    <Box>
      {methods.map(method => {
        return (
          <MethodItem method={method} />
        )
      })}
      <PersonalSide methods={methods} />
      <SideBar />
    </Box>
  );

};

export default MethodsSide



import { getMethods } from '../services/api'
import { useState, useEffect } from 'react';
import PersonalSide from './PersonalSide'
import MethodItem from './MethodItem'
import { Box } from "@chakra-ui/react";


const MethodsSide = () => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    getMethods().then((newMethods) => setMethods(newMethods));
  }, [])

  return (
    <Box>
      {methods.map((method) => {
        return <MethodItem method={method} />;
      })}
      <PersonalSide methods={methods} />
    </Box>
  );

};

export default MethodsSide



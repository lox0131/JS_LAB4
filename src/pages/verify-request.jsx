import styles from "../styles/Home.module.css";
import React from "react";
import { Box, Heading } from '@chakra-ui/react'

const verifyrequest = () => {
  return (
    <div className={styles.container}>
      <Box shadow="md" borderWidth="1px" borderRadius="10px" padding="30px">
        <Heading>Check your email</Heading>
      </Box>
    </div>
  );
};

export default verifyrequest;

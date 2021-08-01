import React from 'react'
import { Text, Box, VStack } from "@chakra-ui/react";

const MethodItem = ({ method }) => {
    return (
        <VStack key={method._id}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
            margin={2}
          >
            <Text fontSize="4x1">{method.categorie}</Text>
            <Text fontSize="3x1">{method.title}</Text>
          </Box>
        </VStack>
    );
}

export default MethodItem

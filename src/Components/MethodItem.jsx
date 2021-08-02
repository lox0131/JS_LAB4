import React from 'react'
import { Heading, Text, Box, VStack, Container, Flex, useMediaQuery } from "@chakra-ui/react";

const MethodItem = ({ method }) => {
  const [isLargerThan] = useMediaQuery("(min-width:765px)")
    return (
        <VStack key={method._id} padding="10px">
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
            maxW={isLargerThan ? "700px" : "200px"}
          >
            <Heading as="h6" size="md">
              {method.categorie}.prototype.{method.title}
            </Heading>
            <Text fontSize="2x1">Description: {method.description}</Text>
            <Text fontSize="sm">Example : {method.example}</Text>
          </Box>
        </VStack>
    );
}

export default MethodItem

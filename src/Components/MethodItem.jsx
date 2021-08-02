import React from 'react'
import { Heading, Text, Box, VStack, Container } from "@chakra-ui/react";

const MethodItem = ({ method }) => {
    return (
      <Container padding="10px">
        <VStack key={method._id}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
            maxW="300px"
          >
            <Heading as="h6" size="md">
              {method.categorie}.prototype.{method.title}
            </Heading>
            <Text fontSize="2x1">Description: {method.description}</Text>
            <Text fontSize="sm">Example : {method.example}</Text>
          </Box>
        </VStack>
      </Container>
    );
}

export default MethodItem

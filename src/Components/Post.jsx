import { VStack, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useSession } from "next-auth/client";


const Post = ({ newReddit }) => {
  const [ session ] = useSession()
  console.log(newReddit);
  return (
    <>
      <VStack>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="10px" width="400px" alignItems="center" justifyContent="center">
          {newReddit ? (
            <>
              <Heading as="h5" size="md">By: {session?.user?.name}</Heading>
              <Heading as="h6" size="md">
                {newReddit.Category}.prototype.{newReddit.Title}
              </Heading>
              <Text fontSize="2x1">Description: {newReddit.Description}</Text>
              <Text fontSize="sm">Example : {newReddit.Example}</Text>
            </>
          ) : (
            <></>
          )}
        </Box>
      </VStack>
    </>
  );
};

export default Post

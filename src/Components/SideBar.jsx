import { VStack, Heading, Link } from '@chakra-ui/react'
import React from 'react'

const SideBar = () => {
    return (
      <VStack padding="24px">
        <Heading size="md" padding="10px">
          Total Categories
        </Heading>
        <Link href="#section1">Array Methods</Link>
      </VStack>
    );
}

export default SideBar

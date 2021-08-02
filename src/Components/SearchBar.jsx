import {
  InputGroup,
  InputLeftAddon,
  Container,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import React from 'react'

const SearchBar = () => {
    return (
      <div>
        <Container maxW="xs" centerContent >
          <InputGroup>
            <InputLeftAddon children={<SearchIcon color="gray.300" />} />
            <Input type="tel" placeholder="Search" />
          </InputGroup>
        </Container>
      </div>
    );
}

export default SearchBar


import {
  InputGroup,
  InputLeftAddon,
  Container,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import React from 'react'

const SearchBar = ({ filterMethods }) => {
    return (
      <div>
        <Container maxW="xs" centerContent >
          <InputGroup>
            <InputLeftAddon children={<SearchIcon color="gray.300" />} />
            <Input type="tel" placeholder="Search"  onChange={e => filterMethods(e.target.value)}/>
          </InputGroup>
        </Container>
      </div>
    );
}

export default SearchBar


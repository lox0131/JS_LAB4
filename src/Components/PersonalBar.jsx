import {
  List,
  Flex,
  VStack,
  ListItem,
  Heading,
  IconButton,
} from "@chakra-ui/react";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const PersonalBar = ({ filteredSaved, addtoSaved, newfilteredSaved }) => {
  return (
    <VStack padding="1px">
      <Heading as="h4" size="md">
        Choose your methods
      </Heading>
      {filteredSaved.map((method) => (
        <Flex
          p={3}
          shadow="md"
          borderWidth="1px"
          borderRadius="10px"
          key={method._id}
          padding="15px"
        >
          <List key={method._id}>
            <ListItem
              as="h6"
              size="md"
              maxW="300px"
              key={method._id}
              padding="10px"
              maxW="200px"
            >
              {method.categorie}.prototype.{method.title}
              {newfilteredSaved.includes(method) ? (
                <IconButton
                  icon={<CloseIcon />}
                  position="-webkit-sticky"
                  type="submit"
                  size="sm"
                  onClick={() => addtoSaved(method)}
                ></IconButton>
              ) : (
                <IconButton
                  icon={<CheckIcon />}
                  position="-webkit-sticky"
                  type="submit"
                  size="sm"
                  onClick={() => addtoSaved(method)}
                ></IconButton>
              )}
            </ListItem>
          </List>
        </Flex>
      ))}
    </VStack>
  );
};

export default PersonalBar;

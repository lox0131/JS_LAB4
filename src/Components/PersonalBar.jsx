import { List, Box, VStack, ListItem, Heading, filter} from "@chakra-ui/react";

const PersonalBar = ({ filteredSaved }) => {
  return (
    <VStack padding="1px">
      <Heading as="h4" size="md">
        Choose your methods
      </Heading>
      {filteredSaved.map((method) => (
        <Box
          p={3}
          shadow="md"
          borderWidth="1px"
          borderRadius="10px"
          key={method._id}
          padding="15px"
        >
          <List key={method._id}>
            <ListItem as="h6" size="md" maxW="200px" key={method._id}>
              {method.categorie}.prototype.{method.title}
            </ListItem>
          </List>
        </Box>
      ))}
    </VStack>
  );
};

export default PersonalBar;

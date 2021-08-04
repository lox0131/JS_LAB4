import {
  Heading,
  Text,
  Flex,
  VStack,
  useMediaQuery,
  IconButton,
  Input,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const PersonalItem = ({ method, addtoSaved }) => {

  const [note, setNote] = useState()
  const [savedNote, setSavedNote] = useState();

  const handleChange = e => {
    setNote(e.target.value);
  }
  
  const onEnter = e => {
    if (e.key === 'Enter') {
      setSavedNote(e.target.value);
      setNote("");
    }
  }

  const [isLargerThan] = useMediaQuery("(min-width:765px)");
  return (
    <VStack key={method._id} padding="20px">
      <Flex
        p={5}
        shadow="md"
        key={method._id}
        flexDirection="column"
        justifyContent="space-around"
        borderWidth="1px"
        borderRadius="10px"
        width={isLargerThan ? "800px" : "300px"}
      >
        <Heading as="h6" size="md">
          {method.categorie}.prototype.{method.title}
        </Heading>
        <Text fontSize="2x1">Description: {method.description}</Text>
        <Text fontSize="sm">Example : {method.example}</Text>
        <FormControl position="-webkit-sticky">
          <Text position="-webkit-sticky" fontSize="sm">
            Note : {savedNote}
          </Text>
          <Input
            position="-webkit-sticky"
            type="text"
            name="string"
            value={note}
            onChange={handleChange}
            onKeyDown={onEnter}
          ></Input>
        </FormControl>
        <IconButton
          icon={<CloseIcon />}
          position="-webkit-sticky"
          type="submit"
          size="xs"
          onClick={() => addtoSaved(method)}
        ></IconButton>
      </Flex>
    </VStack>
  );
};

export default PersonalItem;

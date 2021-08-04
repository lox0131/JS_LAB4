import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Container,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import {  AddIcon } from "@chakra-ui/icons";
import Post from './Post'
import { useState, useRef } from "react";

const Reddit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const [reddit, setReddit] = useState({
    "Category": "",
    "Title": "",
    "Description": "",
    "Example": "",
  });

  const [newReddit, setNewReddit] = useState();

  const [pressed, setPress] = useState(false);

  const handleChange = (e) => {
    setReddit((oldReddit) => ({
      ...oldReddit,
      [e.target.name]: e.target.value,
    }));
  };

  const onEnter = (e) => {
    setPress(true)
      setNewReddit(reddit);
      setReddit("")

    console.log(reddit);
    console.log(newReddit);
  };

  console.log(reddit)

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={onOpen}
        marginBottom="20px"
      >
        Create Summary
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Submit your personal methods
          </DrawerHeader>
          <DrawerBody>
            <FormControl id="text">
              <Container>
                <FormLabel padding="10px">Category</FormLabel>
                <Input
                  type="text"
                  name="Category"
                  value={reddit.Category || ""}
                  onChange={handleChange}
                />
                <FormHelperText padding="10px">
                  Genre of your method
                </FormHelperText>
                <FormLabel padding="10px">Title</FormLabel>
                <FormHelperText padding="10px">
                  Title of your method
                </FormHelperText>
                <Input
                  type="text"
                  name="Title"
                  value={reddit.Title || ""}
                  onChange={handleChange}
                />
                <FormLabel padding="10px">Description</FormLabel>
                <Input
                  type="text"
                  name="Description"
                  value={reddit.Description || ""}
                  onChange={handleChange}
                />
                <FormHelperText padding="10px">
                  Description of your method
                </FormHelperText>
                <FormLabel padding="10px">Example</FormLabel>
                <Input
                  type="text"
                  name="Example"
                  value={reddit.Example || ""}
                  onChange={handleChange}
                />
                <FormHelperText padding="10px">
                  A short example of the method
                </FormHelperText>
              </Container>
            </FormControl>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button colorScheme="blue" onClick={onEnter}>
              Submit your method
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {pressed && <Post newReddit={newReddit} key={uuidv4()} />}
    </>
  );
};

export default Reddit;

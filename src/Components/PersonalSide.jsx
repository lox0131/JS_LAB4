import { useEffect, useState } from "react";
import { getSaved, postSaved, deleteEvent } from "../services/api";
import { Method } from "../context/MethodContext";
import Header from "./Header";
import { signIn, useSession } from "next-auth/client";
import styles from "../styles/Home.module.css";
import { Heading, Button, Flex, useMediaQuery, Box } from "@chakra-ui/react";
import PersonalBar from './PersonalBar'
import { v4 as uuidv4 } from "uuid";

const PersonalSide = () => {
  const [ session, loading ] = useSession();
  const { methods } = Method();
   const userID = session && session.accessToken;
  const [ saved, setSaved ] = useState({
      "userID": userID,
      "methodsID": '',
  });
  const [ isLargerThan ] = useMediaQuery("(min-width:765px)");
  const [ filteredSaved, setFilteredSaved ] = useState([methods])
  
   useEffect(() => {
     setFilteredSaved(methods);
   }, [methods]);

    useEffect(() => {
      getSaved().then((res) => setSaved(res.forEach(user_method => {
          if (user_method === userID) return [user_method.methodsID]}
      )));
    }, []);
    console.log(saved)
  
  const addtoDB = (user_method) => {
    saved
  }
  
  const filterMethods = value => {
    const result = methods?.filter((method) =>
      method.title.toLowerCase().includes(value)
    );
    setFilteredSaved(result);
  };

  const addToSavedDB = method => {
    postSaved(method).then(res => setSaved(oldSaved => [...oldSaved, res]))
  }

  const addtoSaved = method => {
      if(!saved.includes(method)) {
          setSaved([...saved, method])
          setFilteredSaved([...filteredSaved, method])
      }
  }

  const removeFromSavedDB = method => {
      deleteEvent(method._id).then(res => {
          if (res.status === 204) {
              setSaved(saved.filter((savedMethod) => savedMethod._id !== method._id));
              setFilteredSaved(filteredSaved.filter(savedMethod => savedMethod._id !== method._id));
          }
      })
  }

  return (
    <>
      {!session && (
        <div className={styles.container}>
          <Heading>Cannot access page</Heading> <br />
          <Button size="lg" rounded="md" onClick={() => signIn()}>
            Sign in ?
          </Button>
        </div>
      )}
      {session && (
        <>
          <Header filterMethods={filterMethods} />
          <Flex>
            {isLargerThan ? (
              <PersonalBar
                sx={{ left: "0" }}
                filteredSaved={filteredSaved}
                saved={saved}
                key={uuidv4()}
              />
            ) : (
              <></>
            )}
            <Box></Box>
          </Flex>
        </>
      )}
    </>
  );
};

export default PersonalSide;

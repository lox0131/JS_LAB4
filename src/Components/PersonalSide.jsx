import { useEffect, useState } from "react";
import { Method } from "../context/MethodContext";
import Header from "./Header";
import { useSession } from "next-auth/client";
import styles from "../styles/Home.module.css";
import { Heading, Button, Flex, useMediaQuery, Box, Container } from "@chakra-ui/react";
import PersonalBar from './PersonalBar'
import PersonalItem from "./PersonalItem"
import { v4 as uuidv4 } from "uuid";

const PersonalSide = () => {
  const { methods } = Method();
  const session = useSession()
  const [ saved, setSaved ] = useState([])
  const [ isLargerThan ] = useMediaQuery("(min-width:765px)");
  const [ filteredSaved, setFilteredSaved ] = useState([methods])
  const [ newfilteredSaved, setNewfilteredSaved] = useState([])
  
   useEffect(() => {
     setFilteredSaved(methods);
   }, [methods]);


  const filterMethods = value => {
    const result = methods?.filter((method) =>
      method.title.toLowerCase().includes(value));
    const result2 = saved?.filter(saved => saved.title.toLowerCase().includes(value))
    setFilteredSaved(result);
    setNewfilteredSaved(result2);
  };

  const addtoSaved = (method) => {
    if(!saved.includes(method)) {
      setSaved([...saved, method])
      setNewfilteredSaved([...newfilteredSaved, method])
    } else removeFromSaved(method);
  }

  const removeFromSaved = (method) => {
    setSaved(saved.filter(savedMethod => savedMethod !== method))
    setNewfilteredSaved(newfilteredSaved.filter(savedMethod => savedMethod !== method))
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
                filteredSaved={filteredSaved}
                newfilteredSaved={newfilteredSaved}
                addtoSaved={addtoSaved}
                key={uuidv4()}
              />
            ) : (
              <></>
            )}
            <Container justifyContent="center">
              {newfilteredSaved.map((method) => (
                <PersonalItem
                  method={method}
                  key={uuidv4()}
                  addtoSaved={addtoSaved}
                />
              ))}
            </Container>
          </Flex>
        </>
      )}
    </>
  );
};

export default PersonalSide;

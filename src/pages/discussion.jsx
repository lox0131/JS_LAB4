import Reddit from "../Components/Reddit"
import Header from "../Components/Header"
import { Container, Flex } from "@chakra-ui/layout"
const disscusion = () => {
    return (
        <>
    <Header />
     <Flex alignItems="center" justifyContent="center" flexDirection="column">
       <Reddit />
       </Flex>
       </>
    )
}

export default disscusion
 
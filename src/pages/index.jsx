import { signIn, signOut, useSession } from "next-auth/client";
import Header from "../Components/Header"
import MethodSide from "../Components/MethodsSide"
import { Box, Heading } from "@chakra-ui/layout";
import Sidebar from "../Components/SideBar";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Box>
      <Header sx={{ position: "sticky", top: "0" }} />
      <MethodSide />
      {/* <div className={styles.container}>
        <>
          {!session && (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
          {session && (
            <>
            
              {console.log(session)}
              Signed in as {session?.user?.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          )}
        </>
      </div> */}
    </Box>
  );
}

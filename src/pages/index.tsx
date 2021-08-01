import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header"
import { Box } from "@chakra-ui/layout";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Box>
      <Header sx={{ position: "sticky", top: "0" }} />
      <div className={styles.container}>
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
      </div>
    </Box>
  );
}

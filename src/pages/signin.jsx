import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Container,
  Stack,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

export default function SignIn({ providers, csrfToken  }) {
  const { toggleColorMode } = useColorMode()
  const formbackground = useColorModeValue("grey.100")
  const buttonbackground = useColorModeValue("white");
  
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      background="blackAlpha.100"
    >
      <Container maxW="xl" centerContent background="white.100">
        <Heading mb={6}>Log in </Heading>
        <Box className="email-form" colorscheme="teal">
          <form method="post" action="/api/auth/signin/email">
            <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Email address
              <Input
                type="text"
                id="email"
                name="email"
                variant="filled"
                background={formbackground}
                mb={3}
              />
            </label>
            <Button background={buttonbackground} type="submit">
              Use your Email
            </Button>
          </form>
          <Stack
            isInline
            marginTop={12}
            flexDirection="column"
            alignItems="center"
            mb={3}
            variant="filled"
          >
            {Object.values(providers).map((provider) => {
              if (provider.name === "Email") {
                return;
              }
              return (
                <Box key={provider.name}>
                  <Button
                    mb={3}
                    background={buttonbackground}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in with {provider.name}
                  </Button>
                </Box>
              );
            })}
          </Stack>
        </Box>
        <Button background={buttonbackground} onClick={toggleColorMode}>
          Toggle color mode
        </Button>
      </Container>
    </Flex>
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};

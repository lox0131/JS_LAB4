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
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function SignIn({ providers, csrfToken }) {
  const { toggleColorMode } = useColorMode();
  const colors = useColorModeValue("grey.100", "grey.700");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Container maxW="xl" centerContent>
        <Heading mb={6}>Log in with email</Heading>
        <Box className="email-form">
          <form method="post" action="/api/auth/signin/email">
            <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Email address
              <Input
                type="text"
                id="email"
                name="email"
                variant="filled"
                color={colors}
                mb={3}
              />
            </label>
            <Button background={colors} type="submit">
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
                    background={colors}
                    onClick={() => signIn(provider.id)}
                  >
                    Log in with {provider.name}
                  </Button>
                </Box>
              );
            })}
          </Stack>
        </Box>
          <IconButton icon={<SwitchIcon />} size="md" fontSize="lg" onClick={toggleColorMode} color={colors} />
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

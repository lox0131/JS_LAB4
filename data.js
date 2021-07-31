import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Container,
} from "@chakra-ui/react";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

const VARIANT_COLOR = "teal";

const Forms = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystsemColorMode: true,
        }}
      >
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const LoginArea = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader />
          <SignIn />
        </Box>
      </Box>
    </Flex>
  );
};

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="right" py={4}>
      <IconButton
        icon={colorMode === "light" ? "moon" : "sun"}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Sign In to Your Account</Heading>
      <Text>
        Or <Link color={`${VARIANT_COLOR}.500`}>start your 14 days trial</Link>
      </Text>
    </Box>
  );
};

function SignIn({ providers, csrfToken }) {
  return (
    <Container maxW="xl" centerContent>
      <Heading as="h1" textAlign="center">
        Welcome to our custom page
      </Heading>
      <Box alignContent="center" justifyContent="center" marginTop={12}>
        <Box className="email-form">
          <form method="post" action="/api/auth/signin/email">
            <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Email address
              <Input type="text" id="email" name="email" />
            </label>
            <Button type="submit">Use your Email</Button>
          </form>
        </Box>
        <Stack isInline marginTop={12}>
          {Object.values(providers).map((provider) => {
            if (provider.name === "Email") {
              return;
            }
            return (
              <Box key={provider.name}>
                <Button variant="outline" onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </Button>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Container>
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

export default Forms;

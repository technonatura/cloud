import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

function MyApp({ Component, pageProps }) {
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };
  const theme = extendTheme({
    colors,
    styles: {
      global: (props) => ({
        body: {
          fontFamily: "body",
          color: mode("gray.800", "whiteAlpha.900")(props),
          bg: mode("white", "gray.800")(props),
          lineHeight: "base",
        },
      }),
    },
  });

  return (
    <ChakraProvider theme={theme} b>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

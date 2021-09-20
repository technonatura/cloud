import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Flex,
  Link,
  Icon,
} from "@chakra-ui/react";
import {
  IoLogoGitlab,
  IoLogoGithub,
  IoLogoBitbucket,
  IoLogoDiscord,
} from "react-icons/io5";
import { ReactNode } from "react";
import { GrStatusGood } from "react-icons/gr";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        color: useColorModeValue("blackAlpha.500", "gray.500"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const StatusButton = (
    <Box
      display={{ base: "none", md: "flex" }}
      alignItems="center"
      as="a"
      aria-label="Sponsor Choc UI on Open Collective"
      href={""}
      target="_blank"
      rel="noopener noreferrer"
      bg={useColorModeValue("gray.50", "gray.700")}
      borderWidth="1px"
      borderColor={useColorModeValue("gray.200", "gray.600")}
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color={useColorModeValue("green.400", "gray.400")}
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: useColorModeValue("gray.100", "gray.800"),
        borderColor: useColorModeValue("gray.300", "gray.700"),
        color: useColorModeValue("green.500", "gray.500"),
      }}
      _active={{
        borderColor: "gray.200",
      }}
      _focus={{
        boxShadow: "outline",
      }}
      ml={5}
    >
      Status:
      <Box as="strong" ml={1} lineHeight="inherit" fontWeight="semibold">
        All systems normal
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container maxW={"6xl"} py={4}>
          <Flex
            as={Stack}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text color={useColorModeValue("gray.600", "gray.500")}>
              © 2021 Aldhanekaa
            </Text>
            <Stack direction={"row"} spacing={6}>
              {StatusButton}
            </Stack>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Gitlab"}
                href="https://gitlab.com/aldhanekaa"
              >
                <IoLogoGitlab />
              </SocialButton>
              <SocialButton
                label={"Github"}
                href="https://github.com/aldhanekaa"
              >
                <IoLogoGithub />
              </SocialButton>
              <SocialButton label={"Discord"} href={"#"}>
                <IoLogoDiscord />
              </SocialButton>
            </Stack>
          </Flex>

          <Text mt={5} color={useColorModeValue("gray.600", "gray.600")}>
            <Image
              mr={2}
              height="20px"
              objectFit="cover"
              src="https://resir014.xyz/_next/static/images/cc-by-nc-sa-35157979fe2560971c103dd439f23409.svg"
              alt="CC-BY-NC-SA 4.0 LICENSE"
              display="inline-block"
            />
            Code and contents are licensed under CC-BY-NC-SA 4.0. Powered by
            Nextjs, React, and Chakra-UI.
          </Text>
        </Container>
      </Box>
    </>
  );
}

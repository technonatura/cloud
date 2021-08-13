import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";

export default function App() {
  return (
    <SimpleGrid
      bg={useColorModeValue("gray.50", "gray.900")}
      columns={{ base: 1, md: 2 }}
      spacing={0}
    >
      <Flex bg="brand.400">
        <Image
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          loading="lazy"
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color={useColorModeValue("gray.600", "gray.300")}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          Looking For Help?
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          We're here to help
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="md">
          <chakra.a
            cursor="pointer"
            mt={2}
            py={3}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            color={useColorModeValue("white", "dark")}
            bg={useColorModeValue("green.400", "green.400")}
            _hover={{
              bg: useColorModeValue("green.500", "green.500"),
            }}
          >
            Visit the Documentation
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}

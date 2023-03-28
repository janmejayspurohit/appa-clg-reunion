import { useState } from "react";
import "./App.css";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Text,
  VStack,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ImageGallery from "./components/ImageGallery";
const galleryImages = import.meta.glob("/public/*.{jpg,jpeg,png}");

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedView, setSelectedView] = useState("home");
  const CLASSMATES = [
    "Ashok Malebennur",
    "Anil Hassan",
    "Bandu Koti",
    "Diwakar Hegde",
    "P N",
    "Ravi Katti",
    "Ravindra Desai",
    "Ramanath Banshankari",
    "Srinath Hegde",
    "Srinath Kulkarni",
    "Satish Purohit",
    "Vajindra Dessi",
  ];

  const images = Object.keys(galleryImages).map((path) => ({
    id: path,
    url: path.replace("./", "/public/"),
    thumbnailUrl: path.replace("./", "/public/"),
    title: path,
  }));

  const NavLinks = ({ onClose }) => {
    const handleViewChange = (view) => {
      setSelectedView(view);
      onClose();
    };
    return (
      <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 4, md: 8 }} align="center">
        <Button colorScheme="white" onClick={() => handleViewChange("home")}>
          Home
        </Button>
        <Button colorScheme="white" onClick={() => handleViewChange("classmates")}>
          Classmates
        </Button>
        <Button colorScheme="white" onClick={() => handleViewChange("memories")}>
          Memories
        </Button>
        <Button colorScheme="white" onClick={() => handleViewChange("photos")}>
          Old Photos
        </Button>
      </Stack>
    );
  };

  return (
    <ChakraProvider>
      <Stack bg="gray.100" maxW="100vw" minH="100vh">
        {/* Header */}
        <Flex justifyContent="space-between" alignItems="center" bg="#03045E" color="white" p={4}>
          <Heading as="h1" size="md" ml={4}>
            College Reunion - JSS 1983 - B.Com
          </Heading>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton aria-label="Navigation Menu" color="#03045E" icon={<HamburgerIcon />} onClick={onOpen} />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <NavLinks />
          </Box>
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="#03045E">
              <DrawerCloseButton color="white" />
              <DrawerHeader color="white">Navigation</DrawerHeader>
              <DrawerBody>
                <NavLinks onClose={onClose} />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        {/* Body */}
        <VStack maxW="100vw" my={4}>
          {selectedView == "home" && (
            <>
              <Flex justifyContent="center">
                <Image w="90%" src="/banner.jpeg" alt="Banner" />
              </Flex>
              <Heading as="h1" size="xl">
                College Batch 1983 Reunion
              </Heading>
              <Text mt={4}>
                Join us for a night of reminiscing and catching up with old friends from the Class of 1983. Our special guest of honor will be [Guest
                of Honor Name].
              </Text>
              <Image maxW="40vw" src="/invitation.jpeg" alt="Invitation" />
            </>
          )}

          {selectedView == "classmates" && (
            <>
              <Stack mt={4} spacing={4}>
                <Accordion allowMultiple>
                  {CLASSMATES.map((classmate) => (
                    <AccordionItem>
                      <AccordionButton w="50vw">
                        <Box flex="1" textAlign="left">
                          {classmate}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text>Tell us about yourself</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Stack>
            </>
          )}
          {selectedView == "memories" && (
            <>
              <Stack mt={4} spacing={4}>
                <Accordion allowMultiple>
                  {["memory 1", "memory 2"].map((classmate) => (
                    <AccordionItem>
                      <AccordionButton w="50vw">
                        <Box flex="1" textAlign="left">
                          {classmate}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text>Tell us about yourself</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Stack>
            </>
          )}
          {selectedView == "photos" && <ImageGallery images={images} />}
        </VStack>

        <Spacer />

        {/* Footer */}
        <HStack justifyContent="center" p={2}>
          <Text>© Made with 💝 by Satish S Purohit - JSS 1983 - B.Com</Text>
        </HStack>
      </Stack>
    </ChakraProvider>
  );
}

export default App;

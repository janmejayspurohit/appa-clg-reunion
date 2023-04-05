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
const galleryImages = import.meta.glob("/public/gallery/*.{jpg,jpeg,png}");

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedView, setSelectedView] = useState("home");
  const CLASSMATES = [
    "MR D M ANNIGERI",
    "MS VARADA A ALUR",
    "MS REKHA V BANKAPUR",
    "MR R B BANASHANKARI",
    "MR G M BANJAR",
    "MS NEETA V BHUJANG",
    "MR K RAGHAVENDRA BHAT",
    "MR S S BHAT",
    "MR ANAND N DESAI",
    "MR VAJENDRA R DESAI",
    "MR RAVINDRA D DESAI",
    "MS RAMA A GALGALI",
    "MR M H GOTUR",
    "MR A K HASSAN",
    "MR V B HUDDAR",
    "MR S G HEGDE",
    "MS VIDYAVATI S HEGDE",
    "MR S B HADIMANI",
    "MS GAYATRI Y HIREHOLI",
    "MR GAJANAN N HEGDE",
    "MR V S HIREMATH",
    "MR S G HEGDE",
    "MR S R HEGDE",
    "MR DIWAKAR N HEGDE",
    "MR M B HEBBALLI",
    "MS NARMADA G HEGDE",
    "MS L S KUBAL",
    "MR S B KOPPAD",
    "MS SAVITRI R KARANT",
    "MR R A KATTI",
    "MR S P KULKARNI",
    "MR M N KULKARNI",
    "MR RANAMAND N KULKARNI",
    "MR B N KOTI",
    "MR K G MANE",
    "MR S N MASUR",
    "MS NAGARATHNA L MUDRABETT",
    "MS SUNAND V MATHAD",
    "MR ASHOK N MALEBENNUR",
    "MS VIJAYALAKSHMI V NANDODKAR",
    "MR SATISH S PUROHIT",
    "MS USHAKIRAN R PATHAWARI",
    "MS VIDYA P PAI",
    "MR S B PATIL",
    "MS LEELA G PATIL",
    "MS RAJANI K PATIL",
    "MR B A PATIL",
    "MS SHOBHA V RAO",
    "MS RATHNA L UPADHYA",
    "MR S M SOOGURSHETTAR",
    "MR P N SHEDBAL",
    "MS SEEMA S SHANBHAG",
    "MS MANGAL V SHIMPI",
    "MS REKHA D SABLE",
    "MS B SUMITRA",
    "MR P B UPADHYA",
    "MS V HEMALATHA",
    "MR DAYANAND D PATIL",
  ];

  const PROFESSORS = ["Professor 1", "Professor 2", "Professor 3"];

  const images = Object.keys(galleryImages).map((path) => {
    return {
      id: path,
      url: path.replace("/public", ""),
      thumbnailUrl: path.replace("/public", ""),
      title: path,
    };
  });

  const NavLinks = () => {
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
        <Button colorScheme="white" onClick={() => handleViewChange("professors")}>
          Professors
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
          <Heading as="h1" size={["sm", "md"]} ml={4}>
            ಗುರುವಂದನಾ - JSS 1983 - B.Com
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
              <Heading as="h1" size={["md", "xl"]} textAlign="justify">
                1983 Batch Guruvandana Event
              </Heading>
              <Image maxH={["60vh", "100vh"]} src="/invitation.jpeg" alt="Invitation" />
            </>
          )}

          {selectedView == "classmates" && (
            <>
              <Stack mt={4} spacing={4}>
                <Accordion allowMultiple>
                  {CLASSMATES.map((classmate, i) => (
                    <AccordionItem key={"classmates" + i}>
                      <AccordionButton w="80vw">
                        <Box flex="1" textAlign="left">
                          {i + 1}. {classmate}
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
          {selectedView == "professors" && (
            <>
              <Stack mt={4} spacing={4}>
                <Accordion allowMultiple>
                  {PROFESSORS.map((professor, i) => (
                    <AccordionItem key={"professors" + i}>
                      <AccordionButton w="80vw">
                        <Box flex="1" textAlign="left">
                          {i + 1}. {professor}
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
                  {["memory 1", "memory 2"].map((memory) => (
                    <AccordionItem>
                      <AccordionButton w="80vw">
                        <Box flex="1" textAlign="left">
                          {memory}
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
          <Text fontSize={["10px", "12px", "14px"]}>© Made with 💝 by Satish S Purohit</Text>
        </HStack>
      </Stack>
    </ChakraProvider>
  );
}

export default App;

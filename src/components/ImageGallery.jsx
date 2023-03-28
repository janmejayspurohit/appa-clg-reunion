import { useState } from "react";
import { Box, Grid, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

const ImageGallery = ({ images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Box m="2">
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)" }}
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
        {images.map((image) => (
          <Box key={image.id} onClick={() => handleImageClick(image)}>
            <Image src={image.thumbnailUrl} alt={image.title} />
          </Box>
        ))}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="white" bg="red" />
          <ModalBody p={0}>
            <Image src={selectedImage?.url} alt={selectedImage?.title} w="100%" h="100%" objectFit="contain" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ImageGallery;

// Complete the Index page component here
// Use chakra-ui for UI components and react-icons for icons
import { Box, Image, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaImage } from "react-icons/fa";

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Lazy loading image function
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Box textAlign="center" py={10}>
      <Box position="relative" width="300px" height="300px" mx="auto">
        {!imageLoaded && <Spinner size="xl" position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)" />}
        <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE0MzE0ODU1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Landscape" onLoad={handleImageLoad} style={{ display: imageLoaded ? "block" : "none" }} width="100%" height="100%" objectFit="cover" />
      </Box>
      <FaImage style={{ fontSize: "24px", marginTop: "20px" }} />
    </Box>
  );
};

export default Index;

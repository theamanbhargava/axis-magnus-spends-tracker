import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box as="footer" py={4} textAlign="center" fontSize="sm" color="gray.500">
            &copy; {new Date().getFullYear()} Bhargava Tech. All rights reserved.
            <br />
            Developed with ❤️ by Aman Bhargava
        </Box>
    );
};

export default Footer;

import { Box } from "@chakra-ui/react";
import {format} from "date-fns";

const buildTime = format(new Date(__BUILD_TIME__), 'dd MMM yyyy HH:mm:ss');

const Footer = () => {
    return (
        <Box as="footer" py={4} textAlign="center" fontSize="sm" color="gray.500">
            &copy; {new Date().getFullYear()} Bhargava Tech. All rights reserved.
            <br />
            Developed with ❤️ by Aman Bhargava
            <p>Last Build Time: {buildTime}</p>
        </Box>
    );
};

export default Footer;

import {useState} from "react";
import {
    Button, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
} from "@chakra-ui/react";
import {Carousel} from "react-responsive-carousel";
import screenshot1 from "../assets/first.png";
import screenshot2 from "../assets/second.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HelpModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (<>
        <Link onClick={handleOpen}>
            How to download data?
        </Link>{' '}
        <Modal isOpen={isOpen} onClose={handleClose} size="full">
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>How to Get Data from Axis Bank Website</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Carousel showThumbs={false} showStatus={false}>
                        <div>
                            <Image
                                src={screenshot1}
                                alt="Screenshot 1"
                                objectFit="contain"
                                maxH="80vh"
                                mx="auto"
                            />
                            <p>Screenshot 1: How to download CSV statement from Axis Bank website.</p>
                        </div>
                        <div>
                            <Image
                                src={screenshot2}
                                alt="Screenshot 2"
                                objectFit="contain"
                                maxH="80vh"
                                mx="auto"
                            />
                            <p> Screenshot 2: Which lines to remove from the downloaded CSV statement.</p>
                        </div>
                    </Carousel>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>);
};

export default HelpModal;

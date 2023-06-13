import {useState} from 'react';
import {
    Alert,
    AlertIcon,
    Button,
    Flex,
    Link,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    UnorderedList,
} from '@chakra-ui/react';

const PrivacyBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (<>
            <Alert
                status="info"
                position="fixed"
                top={0}
                right={0}
                borderRadius="none"
                width="100%"
                height="10px"
                p={4}
                justifyContent="center"
                alignItems="center"
            >
                <Flex align="center" justifyContent="space-between">
                    <Flex align="center">
                        <AlertIcon boxSize={5} mr={2}/>
                        <Text fontSize="sm">
                            Your privacy is taken seriously.{' '}
                            <Link color="blue.500" onClick={handleOpenModal} textDecoration="underline"
                                  cursor="pointer">
                                Learn More
                            </Link>
                        </Text>
                    </Flex>
                </Flex>
            </Alert>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="md">
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Data Privacy</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Text fontSize="sm">
                            We understand the importance of your data privacy. Here's what you need to know about how
                            your data is handled:
                        </Text>
                        <UnorderedList mt={4}>
                            <ListItem>
                                No personal data, including credit card statement data, ever leaves your machine.
                            </ListItem>
                            <ListItem>
                                All data processing is done locally in your browser. No data is sent to any external
                                servers.
                            </ListItem>
                            <ListItem>
                                IP Addresses are not logged, neither is any other data.
                            </ListItem>
                        </UnorderedList>
                        <Button colorScheme="blue" mt={6} onClick={handleCloseModal}>
                            Close
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>);
};

export default PrivacyBanner;

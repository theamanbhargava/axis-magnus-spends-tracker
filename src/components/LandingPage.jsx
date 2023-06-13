import {Alert, AlertIcon, Box, Center, Heading, Icon, Link, Text, VStack} from '@chakra-ui/react';
import {FiExternalLink} from 'react-icons/fi';

const LandingPage = () => {
    return (
        <Box mb={8}>
            <VStack spacing={4} alignItems="flex-start">
                <Heading as="h1" size="xl">
                    Welcome to the Spend Tracker App!
                </Heading>
                <Text fontSize="lg">
                    This app is designed to help you track your spends and progress towards the monthly spend-based milestone of the Axis Bank Magnus credit card.
                </Text>
                <Center>
                    <Alert status="info" variant="left-accent">
                        <AlertIcon />
                        <Text>
                            Visit the{' '}
                            <Link href="https://www.axisbank.com/retail/cards/credit-card/axis-bank-magnus-card/feature-benefits" target="_blank" rel="noopener noreferrer">
                                Axis Bank Magnus Card
                            </Link>{' '}
                            <Icon as={FiExternalLink} />
                        </Text>
                    </Alert>
                </Center>
            </VStack>
        </Box>
    );
};

export default LandingPage;

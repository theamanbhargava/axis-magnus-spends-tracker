import {Alert, AlertIcon, Box, Grid, GridItem, Heading, Icon, Link, Text, VStack} from '@chakra-ui/react';
import {FiExternalLink} from 'react-icons/fi';
import HelpModal from "./HelpModal.jsx";
import PrivacyBanner from "./PrivacyBanner.jsx";

const LandingPage = () => {
    return (<Box mb={8}>
        <VStack spacing={4} alignItems="flex-start">
            <PrivacyBanner/>
            <Heading as="h1" size="xl">
                Welcome to the Spend Tracker App!
            </Heading>
            <Text fontSize="lg">
                This app is designed to help you track your spends and progress towards the monthly spend-based
                milestone of the Axis Bank Magnus credit card.
            </Text>
            <Grid w={'100%'} templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%'>
                    <Alert status="success" variant="left-accent">
                        <AlertIcon/>
                        <HelpModal/>
                    </Alert>
                </GridItem>
                <GridItem w='100%'>
                    <Alert status="info" variant="left-accent">
                        <AlertIcon/>
                        <Text>
                            Visit{" "}
                            <Link
                                href="https://www.axisbank.com/retail/cards/credit-card/axis-bank-magnus-card/feature-benefits"
                                target="_blank" rel="noopener noreferrer">
                                Axis Magnus Official Website
                            </Link>{" "}
                            <Icon as={FiExternalLink}/>
                        </Text>
                    </Alert>
                </GridItem>
            </Grid>
        </VStack>
    </Box>);
};

export default LandingPage;

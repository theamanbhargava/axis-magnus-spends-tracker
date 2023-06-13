import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";

function PrivacyAccordion(){
    return (
        <Accordion allowToggle mt={4}>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Privacy
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <p>
                        We take your data privacy seriously. Here's what you need to know
                        about how your data is handled:
                    </p>
                    <ul>
                        <li>
                            No personal data, including IP addresses or credit card
                            statement data, ever leaves your machine.
                        </li>
                        <li>
                            All data processing is done locally in your browser. No data is
                            sent to any external servers.
                        </li>
                    </ul>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>

    )
}

export default PrivacyAccordion;

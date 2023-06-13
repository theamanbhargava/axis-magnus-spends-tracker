import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ListItem, UnorderedList
} from "@chakra-ui/react";

function SpendingDetailsAccordion() {
    return (<Accordion allowToggle mt={4}>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Why are certain transactions excluded from spending calculations?
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <UnorderedList textAlign={'left'} mt={4}>
                        <ListItem>Online payment transactions: These transactions represent payments made towards the
                            credit card and are not considered as spend towards the milestone.
                        </ListItem>
                        <ListItem>Euronet transactions: These transactions also indicate payments made towards the
                            credit card and are not counted towards the milestone spending.
                        </ListItem>
                        <ListItem>Rebates: Fuel surcharge rebates are excluded from the spending calculations as they
                            do not contribute to the milestone spend.
                        </ListItem>
                        <ListItem>GST: GST per my information is not counted towards spend milestones.
                        </ListItem>
                        <ListItem>Joining Fee: Joining fees is not counted towards spend milestones.
                        </ListItem>
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>)
}

export default SpendingDetailsAccordion;


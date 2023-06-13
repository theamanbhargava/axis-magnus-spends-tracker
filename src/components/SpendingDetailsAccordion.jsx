import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";

function SpendingDetailsAccordion(){
    return (
        <Accordion allowToggle mt={4}>
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
                    <ul>
                        <li>Online payment transactions: These transactions represent payments made towards the
                            credit card and are not considered as spend towards the milestone.
                        </li>
                        <li>Euronet transactions: These transactions also indicate payments made towards the
                            credit card and are not counted towards the milestone spending.
                        </li>
                        <li>Rebates: Fuel surcharge rebates are excluded from the spending calculations as they
                            do not contribute to the milestone spend.
                        </li>
                    </ul>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default SpendingDetailsAccordion;


import {useState} from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Text,
    Textarea,
} from '@chakra-ui/react';
import {parseCSV} from '../utils.js';
import TableData from "./TableData.jsx";
import TransactionList from "./TransactionList.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import LandingPage from "./LandingPage.jsx";
import Footer from "../Footer.jsx";
import PrivacyAccordion from "./PrivacyAccordion.jsx";

const placeholderText = `,Transaction Date,Transaction Details,TXN Currency,Amt in TXN Currency,Amount in INR,
,12 Jun '23,Fuel Cashback Rebates #3921844693,INR,6.54,6.54,
,11 Jun '23,Vouchagram India Pvt. Ltd NEW DELHI IN #3922428941,INR,1045.00,1045.00,`;

const MainComponent = () => {
    const [csvData, setCSVData] = useState(placeholderText);
    const [tableData, setTableData] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const handleParseCSV = () => {
        const {tableData, transactions} = parseCSV(csvData);
        setTableData(tableData);
        setTransactions(transactions);
    };


    return (<Container maxW="container.md" p={4}>
            <LandingPage/>
            <Box mt={8}>
                <FormControl>
                    <FormLabel>Data in CSV format</FormLabel>
                    <Textarea
                        value={csvData}
                        onChange={(e) => setCSVData(e.target.value)}
                        placeholder="Paste your transaction data here"
                        rows={10}
                    />
                    <FormHelperText>
                        Please enter your spend data in the following CSV format:
                        <br/>
                        - The first row should contain the column headers: Transaction Date, Transaction Details, TXN
                        Currency, Amt in TXN Currency, Amount in INR.
                        <br/>
                        - Each subsequent row should contain the respective data for each column.
                        <br/>
                        - The values should be separated by commas (',').
                        <br/>
                        - Date format should be 'DD MMM ''YY' (e.g., 12 Jun '23).
                        <br/>
                        - Make sure there are no extra spaces or empty rows.
                    </FormHelperText>
                </FormControl>
                <Button onClick={handleParseCSV} colorScheme="blue" mt={4}>
                    Calculate Spending
                </Button>
                <ErrorBoundary
                    errorMessage="There was a problem generating the monthly summary. Please try again later.">
                    <TableData tableData={tableData}/>
                </ErrorBoundary>

                <Accordion allowToggle mt={4}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontSize="xl" fontWeight="bold">
                                        Transactions List
                                    </Text>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <ErrorBoundary
                                errorMessage="There was a problem generating the list of transactions. Please try again later.">
                                <TransactionList transactions={transactions}/>
                            </ErrorBoundary>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

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
            </Box>
            <PrivacyAccordion/>
            <Footer/>
        </Container>);
};

export default MainComponent;

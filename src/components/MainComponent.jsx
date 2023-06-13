import {useState} from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button, Container,
    Textarea,
} from '@chakra-ui/react';
import {parseCSV} from '../utils.js';
import TableData from "./TableData.jsx";
import TransactionList from "./TransactionList.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import LandingPage from "./LandingPage.jsx";


const MainComponent = () => {
    const [csvData, setCSVData] = useState('');
    const [tableData, setTableData] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const handleParseCSV = () => {
        const { tableData, transactions } = parseCSV(csvData);
        setTableData(tableData);
        setTransactions(transactions);
    };


    return (
        <Container maxW="container.md" p={4}>
            <LandingPage />
        <Box mt={8}>
            <Textarea
                value={csvData}
                onChange={(e) => setCSVData(e.target.value)}
                placeholder="Paste your transaction data here"
                rows={10}
            />
            <Button onClick={handleParseCSV} colorScheme="blue" mt={4}>
                Parse CSV
            </Button>
            <ErrorBoundary errorMessage="There was a problem generating the monthly summary. Please try again later.">
                <TableData  tableData={tableData}/>
            </ErrorBoundary>

            <Accordion allowToggle mt={4}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                Transactions
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <ErrorBoundary errorMessage="There was a problem generating the list of transactions. Please try again later.">
                            <TransactionList  transactions={transactions}/>
                        </ErrorBoundary>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
        </Container>
    );
};

export default MainComponent;

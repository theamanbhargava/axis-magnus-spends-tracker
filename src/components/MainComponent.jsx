import {useState} from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Table,
    Tbody,
    Td,
    Textarea,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import {format} from 'date-fns';
import {parseCSV, formatNumber} from '../utils.js';
import TableData from "./TableData.jsx";


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
        <Box>
            <Textarea
                value={csvData}
                onChange={(e) => setCSVData(e.target.value)}
                placeholder="Paste your transaction data here"
                rows={10}
            />
            <Button onClick={handleParseCSV} colorScheme="blue" mt={4}>
                Parse CSV
            </Button>
            <TableData tableData={tableData} />

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
                        <Table variant="striped" size="md">
                            <Thead>
                                <Tr>
                                    <Th>Transaction Date</Th>
                                    <Th>Transaction Details</Th>
                                    <Th>TXN Currency</Th>
                                    <Th>Amt in TXN Currency</Th>
                                    <Th>Amount in INR</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {transactions.map((transaction, index) => (
                                    <Tr key={index}>
                                        <Td>{format(transaction['Transaction Date'], 'dd MMM yyyy')}</Td>
                                        <Td>{transaction['Transaction Details']}</Td>
                                        <Td>{transaction['TXN Currency']}</Td>
                                        <Td>{formatNumber(transaction['Amt in TXN Currency'])}</Td>
                                        <Td>{formatNumber(transaction['Amount in INR'])}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};

export default MainComponent;
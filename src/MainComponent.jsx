import {useState} from 'react';
import {Box, Table, Thead, Tbody, Tr, Th, Td, Textarea, Button} from '@chakra-ui/react';

import { parseCSV } from './utils';
import TransactionList from './TransactionList';


const MainComponent = () => {
    const [csvData, setCSVData] = useState('');
    const [transactions, setTransactions] = useState([]);

    const handleCSVDataChange = (event) => {
        setCSVData(event.target.value);
    };

    const handleParseCSV = () => {
        const { transactions } = parseCSV(csvData);
        setTransactions(transactions);
    };

    // Group transactions by month
    const groupedTransactions = transactions.reduce((grouped, transaction) => {
        const month = transaction['YearMonth'];
        if (!grouped[month]) {
            grouped[month] = [];
        }
        grouped[month].push(transaction);
        return grouped;
    }, {});

    return (
        <Box>
            <Textarea value={csvData} onChange={handleCSVDataChange} placeholder="Paste CSV data here" size="md" mb={4} />

            <Button colorScheme="blue" onClick={handleParseCSV} mb={4}>
                Parse CSV
            </Button>
            <Table variant="simple" size="md">
                <Thead>
                    <Tr>
                        <Th>Month</Th>
                        <Th>Spend in Calendar Month</Th>
                        <Th>Spend Milestone Achieved</Th>
                        <Th>Gyftr Transaction Value</Th>
                        <Th>GrabDeals Transaction Value</Th>
                        <Th>Travel Edge Transaction Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.entries(groupedTransactions).map(([month, monthlyTransactions]) => {
                        const spendInCalendarMonth = monthlyTransactions.reduce((sum, transaction) => sum + parseFloat(transaction['Amount in INR']), 0);
                        const spendMilestoneAchieved = spendInCalendarMonth >= 100000 ? 'Yes' : 'No';
                        const gyftrTransactionValue = monthlyTransactions.reduce((sum, transaction) => {
                            if (transaction['Transaction Details'] === 'Gyftr eligible') {
                                return sum + parseFloat(transaction['Amount in INR']);
                            }
                            return sum;
                        }, 0);
                        const grabdealsTransactionValue = monthlyTransactions.reduce((sum, transaction) => {
                            if (transaction['Transaction Details'] === 'Grabdeals') {
                                return sum + parseFloat(transaction['Amount in INR']);
                            }
                            return sum;
                        }, 0);
                        const travelEdgeTransactionValue = monthlyTransactions.reduce((sum, transaction) => {
                            if (transaction['Transaction Details'] === 'Travel Edge') {
                                return sum + parseFloat(transaction['Amount in INR']);
                            }
                            return sum;
                        }, 0);

                        return (
                            <Tr key={month}>
                                <Td>{month}</Td>
                                <Td>{spendInCalendarMonth}</Td>
                                <Td>{spendMilestoneAchieved}</Td>
                                <Td>{gyftrTransactionValue}</Td>
                                <Td>{grabdealsTransactionValue}</Td>
                                <Td>{travelEdgeTransactionValue}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>

            <TransactionList transactions={transactions} />
        </Box>
    );
};

export default MainComponent;

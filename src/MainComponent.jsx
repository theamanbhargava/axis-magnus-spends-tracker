import {useState} from 'react';
import {Box, Table, Thead, Tbody, Tr, Th, Td, Textarea, Button} from '@chakra-ui/react';

import { parseCSV } from './utils';
import TransactionList from './TransactionList';


const MainComponent = () => {
    const [csvData, setCSVData] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [tableData, setTableData] = useState([]);

    const handleCSVDataChange = (event) => {
        setCSVData(event.target.value);
    };

    const handleParseCSV = () => {
        const { transactions, tableData } = parseCSV(csvData);
        setTransactions(transactions);
        setTableData(tableData);
    };

    return (
        <Box>
            <Textarea value={csvData} onChange={handleCSVDataChange} placeholder="Paste CSV data here" size="md" mb={4} />

            <Button colorScheme="blue" onClick={handleParseCSV} mb={4}>
                Parse CSV
            </Button>
            {tableData && (
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
                        {tableData.map((row) => (
                            <Tr key={row.month}>
                                <Td>{row.month}</Td>
                                <Td>{row.spendInCalendarMonth}</Td>
                                <Td>{row.spendMilestoneAchieved}</Td>
                                <Td>{row.gyftrTransactionValue}</Td>
                                <Td>{row.grabdealsTransactionValue}</Td>
                                <Td>{row.travelEdgeTransactionValue}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            )}

            <TransactionList transactions={transactions} />
        </Box>
    );
};

export default MainComponent;

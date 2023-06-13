import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { formatNumber } from '../utils.js';

const TransactionList = ({ transactions }) => {
    return (
        <Table variant="striped" size="md" mt={4}>
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
                        <Td>{formatNumber(transaction['Amt in TXN Currency'], 2)}</Td>
                        <Td>{formatNumber(transaction['Amount in INR'], 2)}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired,
};

export default TransactionList;

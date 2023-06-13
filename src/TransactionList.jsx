import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import PropTypes from "prop-types";

const TransactionList = ({ transactions }) => {
    return (
        <Table variant="simple" size="md">
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
                        <Td>{transaction['Transaction Date'].toString()}</Td>
                        <Td>{transaction['Transaction Details']}</Td>
                        <Td>{transaction['TXN Currency']}</Td>
                        <Td>{transaction['Amt in TXN Currency']}</Td>
                        <Td>{transaction['Amount in INR']}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired
}

export default TransactionList;

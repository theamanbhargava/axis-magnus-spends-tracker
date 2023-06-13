import {Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import PropTypes from "prop-types";
import {formatMonth, formatNumber} from "../utils.js";
import {Fragment} from "react";

function TableData({tableData}){
    if(!tableData || tableData?.length === 0){
        return (<Fragment />)
    }
    return (                <Table variant="striped" size="md" mt={4}>
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
                    <Td>{formatMonth(row.month)}</Td>
                    <Td>{formatNumber(row.spendInCalendarMonth)}</Td>
                    <Td>{row.spendMilestoneAchieved}</Td>
                    <Td>{formatNumber(row.gyftrTransactionValue)}</Td>
                    <Td>{formatNumber(row.grabdealsTransactionValue)}</Td>
                    <Td>{formatNumber(row.travelEdgeTransactionValue)}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>)
}

TableData.propTypes = {
    tableData:PropTypes.array.isRequired
}

export default TableData

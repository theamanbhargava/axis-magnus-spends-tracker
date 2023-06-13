import { format, parse, startOfMonth } from 'date-fns';

const parseCSV = (data) => {
    const lines = data.split('\n');
    const headers = lines[0].split(',').slice(1);
    let transactions = lines.slice(2).map(line => {
        const cells = line.split(',');
        let transaction = {};
        headers.forEach((header, index) => {
            transaction[header] = cells[index + 1];
        });
        return transaction;
    });

    transactions.forEach(transaction => {
        transaction['Transaction Date'] = parse(transaction['Transaction Date'], "dd MMM ''yy", new Date());
    });

    transactions.forEach(transaction => {
        const detail = transaction['Transaction Details'].toLowerCase();
        if (detail.includes('paytm_pageindustrieslt')) {
            transaction['Transaction Details'] = 'Grabdeals';
        } else if (detail.includes('vouchagram')) {
            transaction['Transaction Details'] = 'Gyftr eligible';
        } else if (detail.includes('vernost marketing')) {
            transaction['Transaction Details'] = 'Travel Edge';
        }
    });

    transactions = transactions.filter(transaction => {
        const detail = transaction['Transaction Details'].toLowerCase();
        return !(detail.includes('online payment') || detail.includes('euronet'));
    });

    const groupedTransactions = transactions.reduce((grouped, transaction) => {
        const month = format(startOfMonth(transaction['Transaction Date']), 'yyyy-MM');
        if (!grouped[month]) {
            grouped[month] = [];
        }
        grouped[month].push(transaction);
        return grouped;
    }, {});

    const tableData = Object.keys(groupedTransactions).map(month => {
        const monthlyTransactions = groupedTransactions[month];
        const spendInCalendarMonth = monthlyTransactions.reduce((sum, transaction) => sum + parseFloat(transaction['Amount in INR']), 0);
        const spendMilestoneAchieved = spendInCalendarMonth >= 100000 ? 'Yes' : 'No';
        const gyftrTransactionValue = monthlyTransactions.filter(transaction => transaction['Transaction Details'] === 'Gyftr eligible').reduce((sum, transaction) => sum + parseFloat(transaction['Amount in INR']), 0);
        const grabdealsTransactionValue = monthlyTransactions.filter(transaction => transaction['Transaction Details'] === 'Grabdeals').reduce((sum, transaction) => sum + parseFloat(transaction['Amount in INR']), 0);
        const travelEdgeTransactionValue = monthlyTransactions.filter(transaction => transaction['Transaction Details'] === 'Travel Edge').reduce((sum, transaction) => sum + parseFloat(transaction['Amount in INR']), 0);
        return {
            month,
            spendInCalendarMonth,
            spendMilestoneAchieved,
            gyftrTransactionValue,
            grabdealsTransactionValue,
            travelEdgeTransactionValue
        };
    });

    return { transactions, tableData };
};

export {
    parseCSV
};

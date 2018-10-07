import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from 'react-redux';
import { Table, Tr, TextAmount, HistoryChart, HistoryChartContainer } from '../style/history.js';

const Transaction = ({ transactions }) => {
    return transactions.map((data) => {
        return (
            <Tr key={`transaction-${data.id}`}>
                <td>
                    <div>{data.name}</div>
                    <div>{data.email}</div>
                </td>
                <td><TextAmount>{data.amount}</TextAmount></td>
            </Tr>
        );
    });
};

const History = ({ transactions, sent, left, percentage }) => {
    return (
        <div>
            <HistoryChartContainer>
                <div><b>{sent}</b><div>total sent</div></div>
                <HistoryChart >
                    <CircularProgressbar percentage={percentage} styles={{ path: { stroke: 'yellow' } }} />
                </HistoryChart>
                <div><b>{left}</b><div>left available</div></div>
            </HistoryChartContainer>
            <h3>Transactions</h3>
            <Table>
                <tbody>
                    <Transaction transactions={transactions} />
                </tbody>
            </Table>
        </div>
    );
};

History.propTypes = {
    transactions: PropTypes.array.isRequired,
    left: PropTypes.number.isRequired,
    sent: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};
Transaction.propTypes = {
    transactions: PropTypes.array
};

const mapStateToProps = (state) => ({
    transactions: state.transactions,
    left: state.left,
    sent: state.sent,
    percentage: state.percentage
});
export default connect(mapStateToProps)(History);

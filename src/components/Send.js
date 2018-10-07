import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Error, SendGrid } from '../style/send.js';
import { connect } from 'react-redux';
import sendMoney from '../state/dispatchers';
import validation from '../utils/validation';

class Send extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            transaction: {}
        };
    }

    onSend = () => {
        const errors = validation(this.state.transaction, this.props.left);
        this.setState({ errors: errors });
        if (Object.keys(errors).length === 0) {
            this.props.sendMoney(this.state.transaction);
        }
    }
    render() {
        return (
            <SendGrid>
                <label>Name</label>
                <Input type="text" hasError={this.state.errors.name}
                    onChange={(ev) => this.setState({ transaction: { ...this.state.transaction, name: ev.target.value } })} />
                {this.state.errors.name ? <Error> Please enter a name </Error> : null}

                <label>Email adress</label>
                <Input type="email" hasError={this.state.errors.email}
                    onChange={(ev) => this.setState({ transaction: { ...this.state.transaction, email: ev.target.value } })} />
                {this.state.errors.email ? <Error> Please enter a valid email </Error> : null}

                <label>Amount</label>
                <Input type="number" hasError={this.state.errors.amount} min="0"
                    onChange={(ev) => this.setState({ transaction: { ...this.state.transaction, amount: parseFloat(ev.target.value) } })} />
                {this.state.errors.amount ? <Error>Please enter a valid amount. You cannot send more money then you have left </Error> : null}
                <br />

                <Button onClick={this.onSend}>Send</Button>
            </SendGrid>
        );
    }
}

Send.propTypes = {
    left: PropTypes.number.isRequired,
    sendMessage: PropTypes.func
};
const mapStateToProps = (state) => ({ left: state.left });
const mapDispatchToProps = dispatch => ({ sendMoney: (transaction) => dispatch(sendMoney(transaction)) });
export default connect(mapStateToProps, mapDispatchToProps)(Send);
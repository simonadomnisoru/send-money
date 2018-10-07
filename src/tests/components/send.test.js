import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Send from '../../components/Send';
import store from '../../state/store';
import { Input, Button, Error, SendGrid } from '../../style/send';


configure({ adapter: new Adapter() });
describe('Send component works correctly', () => {
    it('should render the send money form', () => {
        const wrapper = mount(<Send store={store} />);
        expect(wrapper.find(Input).length).to.equal(3);
        expect(wrapper.find(Button).length).to.equal(1);
        expect(wrapper.find(Error).length).to.equal(0);
        expect(wrapper.find(SendGrid).length).to.equal(1);
    });
    it('should validate correctly the form', () => {
        const wrapper = mount(<Send store={store} />);
        wrapper.find(Button).simulate('click', 1);
        expect(wrapper.find(Error).length).to.equal(3);

        wrapper.find(Input).at(0).simulate('change', { target: { value: 'myName' } });
        wrapper.find(Button).simulate('click', 1);
        expect(wrapper.find(Error).length).to.equal(2);

        wrapper.find(Input).at(2).simulate('change', { target: { value: 'notNumber' } });
        wrapper.find(Button).simulate('click', 1);
        expect(wrapper.find(Error).length).to.equal(2);

        wrapper.find(Input).at(2).simulate('change', { target: { value: 1000 } });
        wrapper.find(Button).simulate('click', 1);
        expect(wrapper.find(Error).length).to.equal(1);
    });
});
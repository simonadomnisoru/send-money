import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import History from '../../components/History';
import CircularProgressbar from 'react-circular-progressbar';
import store from '../../state/store';
import { Table } from '../../style/history.js';

configure({ adapter: new Adapter() });
describe('Send component works correctly', () => {
    it('should render transaction history', () => {
        const wrapper = mount(<History store={store} />);
        expect(wrapper.find(Table).length).to.equal(1);
        expect(wrapper.find(CircularProgressbar).length).to.equal(1);
    });
});
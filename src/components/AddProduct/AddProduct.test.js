
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddProduct } from './AddProduct';
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

configure({adapter: new Adapter()});

describe('<AddProduct />', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = shallow(<AddProduct />);
    });
    it('should render three <TextField /> elements', () => {
        expect(wrapper.find(TextField)).toHaveLength(3);
    });

    it('should render one <CssBaseline /> elements', () => {
        expect(wrapper.find(CssBaseline)).toHaveLength(1);
    });

    it('should render one <Container /> elements', () => {
        expect(wrapper.find(Container)).toHaveLength(1);
    });

    it('should render one <Button /> elements', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });


});
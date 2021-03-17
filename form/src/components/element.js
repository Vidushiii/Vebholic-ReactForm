import React from 'react';
import Input from './elements/input';
import DropDown from './elements/dropdown';

const Element = ({ field: { type, fieldName } }) => {
    switch (type) {
        case 'text':
            return (<Input />)
        case 'select':
            return (<dropDown />)
        default:
            return null;
    }
}

export default Element;
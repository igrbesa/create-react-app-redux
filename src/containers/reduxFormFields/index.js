import React from 'react';
import TextField from 'material-ui/TextField';

const renderField = (field) => {

    const { touched, error } = field.meta;

    let component = null;
    switch (field.type) {
        case 'textField':
            component = renderTextField(field);
            break;
        case 'email':
            component = renderTextField(field);
            break;
        case 'password':
            component = renderTextField(field);
            break;
        default:
            break;
    }

    return (
        component
    );
};

export default renderField;

const renderTextField = ({ input, label, meta: { error, touched }, ...custom }) => {
    return (<TextField
        error={touched && error? true: false}
        label={label}
        helperText={touched && error? error: ''}
        {...input}
        {...custom}
    />)
}

import React from 'react';
import TextField from 'material-ui/TextField';

// const renderField = ({
//     input,
//     label,
//     meta: { touched, error },
//     ...custom
//   }) =>
//     <TextField
//       hintText={label}
//       floatingLabelText={label}
//       errorText={touched && error}
//       {...input}
//       {...custom}
//     />

const renderField = (field) => {

    let component = null;
    switch (field.type) {
        case 'textField':
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
        label={label}
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />)
}

import React, { Component } from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';

class Login extends Component {
    state = {
        isRegister: false
    }

    render() {
        const {classes, ...other} = this.props;

        return (
            <Dialog {...other}>
                <DialogTitle>title
                </DialogTitle>
                
            </Dialog>
        );
    }
}

const styleSheet = {

}

export default withStyles(styleSheet)(Login);;
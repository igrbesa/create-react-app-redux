import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLoginDialogOpened } from '../../modules/login'

class Login extends Component {
    state = {
        isRegister: false
    }

    handleDialogRequestClose = () => {
        this.props.setLoginDialogOpened(false);
    }

    render() {
        const { classes, isLoginDialogOpened } = this.props;

        return (
            <Dialog open={isLoginDialogOpened}
                onRequestClose={this.handleDialogRequestClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button raised onClick={this.handleRequestClose} color="primary">
                        Sign in
                    </Button>
                    <Button onClick={this.handleDialogRequestClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>

            </Dialog>
        );
    }
}

const styleSheet = {

}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    setLoginDialogOpened
}, dispatch)

const mapStateToProps = (state, ownProps) => {
    return {
        isLoginDialogOpened: state.login.isLoginDialogOpened
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Login))
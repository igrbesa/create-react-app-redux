import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLoginDialogOpened } from '../../modules/login'
import { Field, reduxForm } from 'redux-form'
import renderField from '../reduxFormFields'
import Grid from 'material-ui/Grid';


class Login extends Component {
    state = {
        isRegister: false
    }

    handleDialogRequestClose = () => {
        this.props.setLoginDialogOpened(false);
    }

    render() {
        const { classes, isLoginDialogOpened, handleSubmit } = this.props;

        return (
            <Dialog open={isLoginDialogOpened}
                onRequestClose={this.handleDialogRequestClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <form onSubmit={handleSubmit}>
                            <Grid item xs>
                                <Field name="name" component={renderField} label="First Name" type="textField" margin="normal" />
                            </Grid>
                            <Grid itme xs>
                                <Field name="second" component={renderField} label="Second Name" type="textField" margin="normal" />
                            </Grid>
                        </form>
                    </Grid>
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

Login = reduxForm({
    form: 'login'
})(Login)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Login))
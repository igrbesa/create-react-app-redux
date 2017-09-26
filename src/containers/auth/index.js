import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLoginDialogOpened } from '../../modules/login'
import { Field, reduxForm, submit } from 'redux-form'
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
                onRequestClose={this.handleDialogRequestClose}
                className={classes.root}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <form onSubmit={handleSubmit} className={classes.stretchStyle}>
                            <Grid item xs={12}>
                                <Field name="email" component={renderField} label="E-mail" type="email" margin="normal" required className={classes.stretchStyle}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Field name="password" component={renderField} label="Password" type="password" margin="normal" required className={classes.stretchStyle}/>
                            </Grid>
                        </form>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={12}>
                            <Button raised onClick={() => this.props.submit('login')} color="primary" className={classes.stretchStyle}>
                                Sign in
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={() => alert()}>
                                new user? create new account
                            </Button>
                        </Grid>
                    </Grid>

                </DialogActions>

            </Dialog>
        );
    }
}

const styleSheet = {
    root: {
        flexGrow: 1,
        marginTop: 30
    },
    stretchStyle: {
        width: '100%'
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.email)
        errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Invalid email address';

    if (!values.password)
        errors.password = "Required";
    else if (values.password.length < 6)
        errors.password = "Expected at least 6 characters"



    return errors;
}

const handleLoginSubmit = (values) => {
    alert(values);
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    setLoginDialogOpened,
    submit
}, dispatch)

const mapStateToProps = (state, ownProps) => {
    return {
        isLoginDialogOpened: state.login.isLoginDialogOpened
    }
}

Login = reduxForm({
    form: 'login',
    validate,
    onSubmit: handleLoginSubmit
})(Login)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Login))
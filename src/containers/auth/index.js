import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLoginDialogOpened, setRegisterDialogOpened } from '../../modules/auth'
import { Field, reduxForm, submit } from 'redux-form'
import renderField from '../reduxFormFields'
import Grid from 'material-ui/Grid';


class Login extends Component {

    render() {
        const { classes, isLoginDialogOpened, handleSubmit, setLoginDialogOpened, setRegisterDialogOpened } = this.props;

        return (
            <Dialog open={isLoginDialogOpened}
                onRequestClose={() => setLoginDialogOpened(false)}
                className={classes.root}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <form onSubmit={handleSubmit} className={classes.stretchStyle}>
                            <Grid item xs={12}>
                                <Field name="email" component={renderField} label="E-mail" type="email" margin="normal" required className={classes.stretchStyle} />
                            </Grid>
                            <Grid item xs={12}>
                                <Field name="password" component={renderField} label="Password" type="password" margin="normal" required className={classes.stretchStyle} />
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
                            <Button onClick={() => {
                                setLoginDialogOpened(false);
                                setRegisterDialogOpened(true)
                            }}>
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

const handleLoginSubmit = (values, dispatch, props) => {
    alert(values);

    //after sending login data
    props.setLoginDialogOpened(false);
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    setLoginDialogOpened,
    setRegisterDialogOpened,
    submit
}, dispatch)

const mapStateToProps = (state, ownProps) => {
    return {
        isLoginDialogOpened: state.auth.isLoginDialogOpened
    }
}

Login = reduxForm({
    form: 'login',
    validate,
    onSubmit: handleLoginSubmit
})(Login)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Login))
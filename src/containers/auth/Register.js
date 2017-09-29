import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setRegisterDialogOpened } from '../../modules/auth'
import { Field, reduxForm, submit } from 'redux-form'
import renderField from '../reduxFormFields'
import Grid from 'material-ui/Grid';


class Register extends Component {

    render() {
        const { classes, isRegisterDialogOpened, handleSubmit, setRegisterDialogOpened } = this.props;

        return (
            <Dialog open={isRegisterDialogOpened}
                onRequestClose={() => setRegisterDialogOpened(false)}
                className={classes.root}>
                <DialogTitle>Registration</DialogTitle>
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


    return errors;
}

const hangleRegisterSubmit = (values, dispatch, props) => {
    alert(values);

    //after sending login data
    props.setRegisterDialogOpened(false);
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    setRegisterDialogOpened,
    submit
}, dispatch)

const mapStateToProps = (state, ownProps) => {
    return {
        isRegisterDialogOpened: state.auth.isRegisterDialogOpened
    }
}

Register = reduxForm({
    form: 'register',
    validate,
    onSubmit: hangleRegisterSubmit
})(Register)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Register))
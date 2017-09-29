import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ProfileContainer extends Component {

    state = {

    }

    render() {
        return (
            <div>
                hello
            </div>
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


const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({

}, dispatch)

const mapStateToProps = (state, ownProps) => {
    return {
        isRegisterDialogOpened: state.auth.isRegisterDialogOpened
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(ProfileContainer))
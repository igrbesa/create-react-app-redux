import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SideMenu from './sideMenu';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

import Typography from 'material-ui/Typography';
import { Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';

import {
    increment
} from '../../modules/counter'

import {setLoginDialogOpened} from '../../modules/login'

const styleSheet = {
    root: {
        marginTop: 30,
        width: '100%'
    },
    centerCategories: {
        width: "70%",
        margin: "auto",
        textAlign: "center"
    },
    highlightItem: {
        '&:hover': {
            borderBottom: '1px solid currentColor'
        }
    }
};

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione'
];

class Header extends Component {

    state = {
        isOpenedDrawer: false,
        loginDialogOpened: false
    }

    handleDrawOpening = () => {
        this.setState({ isOpenedDrawer: true });
    }

    handleDrawerClosing = () => {
        this.setState({ isOpenedDrawer: false });
    }

    onListItemClicked = (item) => {
        switch (item) {
            case 'loginout':
                if(!this.props.user){
                    this.props.setLoginDialogOpened(true);
                    // this.setState({loginDialogOpened:true});
                }
                break;
        
            default:
                break;
        }
    }

    onLoginRequestClose = () => {
        this.setState({loginDialogOpened: false});
    }

    render() {

        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="accent">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu" onClick={() => this.handleDrawOpening()}>
                            <MenuIcon  />
                            <SideMenu open={this.state.isOpenedDrawer}
                                onClose={this.handleDrawerClosing}
                                onClick={this.handleDrawerClosing}
                                onListItemClicked = {this.onListItemClicked}
                            />
                        </IconButton>

                        <Typography type="title" color="inherit">
                            Title
                        </Typography>

                        <Hidden smDown>
                            <div className={classes.centerCategories}>
                                <Button color="contrast" className={classes.highlightItem} >{this.props.count}</Button>
                                <Button color="contrast" className={classes.highlightItem}>klik</Button>
                                <Button color="contrast" className={classes.highlightItem}>Login</Button>
                                <Button color="contrast" className={classes.highlightItem}>Login</Button>
                            </div>
                        </Hidden>

                    </Toolbar>

                    
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {

};

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    setLoginDialogOpened
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(Header));

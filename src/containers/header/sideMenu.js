import React from 'react';
import { Drawer } from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

//icons
import HomeIcon from 'material-ui-icons/Home';
import AccountCircle from 'material-ui-icons/AccountCircle';
import CategoryIcon from 'material-ui-icons/Send';
import LoginIcon from 'material-ui-icons/Input';

const styleSheet = {
    list: {
        width: 250,
        flex: 'initial',
    }
};

/**
 * 
 * @param {} template 
 * @param {[{Object{_id, name}}]}  data 
 */
const drawListItems = (data, eventClick) => {
    return data.map(value => {
        const { _id, name } = value;
        return (
            <ListItem button key={_id} onClick={() => eventClick(name)}>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItem>
        )
    })
}

const SideMenu = (props) => {

    const classes = props.classes;
    const {onListItemClicked, categories, user} = props;

    return (
        <Drawer
            open={props.open}
            onRequestClose={props.onClose}
            onClick={props.onClose}
        >
            <List className={classes.list}>

                <ListItem button onClick={() => onListItemClicked('pocetna')}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Početna" />
                </ListItem>

                {drawListItems(
                    [{ _id: 1, name: "Prva" }, { _id: 2, name: "Druga" }], onListItemClicked
                )}
                <Divider/>
                <ListItem button onClick={() => onListItemClicked('aboutme')}>
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="O meni" />
                </ListItem>
                <ListItem button onClick={() => onListItemClicked('loginout')}>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary={user ? "Odjava" : "Logiraj me"} />
                </ListItem>
                {user && 
                    <ListItem button onClick={() => onListItemClicked('profile')}>
                    <ListItemIcon>
                        <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.nick} />
                </ListItem>
                }
            </List>
        </Drawer>
    );
};

export default withStyles(styleSheet)(SideMenu);
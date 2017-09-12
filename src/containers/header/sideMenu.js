import React from 'react';
import { Drawer } from 'material-ui';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import HomeIcon from 'material-ui-icons/Home';
import CategoryIcon from 'material-ui-icons/Send';

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
const drawListItems = (data) => {
    return data.map(value => {
        const { _id, name } = value;
        return (
            <ListItem button key={_id}>
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

    return (
        <Drawer
            open={props.open}
            onRequestClose={props.onClose}
            onClick={props.onClose}
        >
            <List className={classes.list}>

                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Početna" />
                </ListItem>

                {drawListItems(
                    [{ _id: 1, name: "Prva" }, { _id: 2, name: "Druga" }]
                )}

                
            </List>
        </Drawer>
    );
};

export default withStyles(styleSheet)(SideMenu);
import React from 'react';
import {
    Paper,
    makeStyles,
    IconButton,
    Box
} from '@material-ui/core';
import {
    Close
} from '@material-ui/icons';

const useStyle = makeStyles(theme => ({
    toDoItem: {
        '&:hover': {
            backgroundColor: 'rgba(255, 224, 0, 0.7)',
        },
        '&:hover > .removeBtn': {
            visibility: 'visible'
        },
        paddingLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        display: 'flex',
        color: 'rgba(0, 0, 0, 0.7)',
        backgroundColor: 'rgba(255, 247, 0, 0.3)',
        boxShadow: '0px 2px 1px -1px rgba(255, 0, 0, 0.2), 0px 1px 1px 0px rgba(255, 0, 0, 0.14), 0px 1px 3px 0px rgba(255, 0, 0, 0.12)'
    },
    itemContent: {
        flex: 1,
        alignSelf: 'center'
    },
}));

const ToDoItem = ({ content, removeItem }) => {

    const classes = useStyle();

    return (
        <Paper className={classes.toDoItem}>
            <Box className={classes.itemContent}>{content}</Box>
            <IconButton color="secondary" className="removeBtn" aria-label="directions" onClick={() => removeItem(content)}>
                <Close />
            </IconButton>
        </Paper>
    );
}

export default ToDoItem;
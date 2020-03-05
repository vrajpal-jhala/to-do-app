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
            backgroundColor: 'rgb(238, 238, 238)',
        },
        '&:hover > .removeBtn': {
            visibility: 'visible'
        },
        paddingLeft: theme.spacing(2),
        marginTop: theme.spacing(1),
        display: 'flex',
    },
    itemContent: {
        flex: 1,
        alignSelf: 'center'
    },
}));

export default function ToDoItem(props) {

    const { content, removeItem } = props;

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
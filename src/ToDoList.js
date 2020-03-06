import React from 'react';
import ToDoItem from './ToDoItem';
import {
    Box,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    toDoList: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}));

const ToDoList = ({ data, removeItem }) => {
    const classes = useStyles();

    return (
        <Box className={classes.toDoList}>
            {
                data.map(content => (
                    <ToDoItem key={content} content={content} removeItem={removeItem} />
                ))
            }
        </Box>
    );
}

export default ToDoList;
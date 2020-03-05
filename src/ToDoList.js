import React from 'react';
import ToDoItem from './ToDoItem';
import {
    Box,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    toDoList: {
        padding: theme.spacing(2)
    }
}));

export default function ToDoList(props) {
    const { data, removeItem } = props;
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
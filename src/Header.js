import React from 'react';
import {
    Grid,
    makeStyles
} from '@material-ui/core';
import {
    ListAlt
} from '@material-ui/icons';

const useStyle = makeStyles({
    header: {
        justifyContent: 'center',
        color: 'rgba(0, 0, 0, 0.7)'
    }
});

const Header = () => {

    const classes = useStyle();

    return (
        <Grid container className={classes.header}>
            <Grid item>
                <h1><ListAlt /> TO DOs</h1>
            </Grid>
        </Grid>
    );
}

export default Header;
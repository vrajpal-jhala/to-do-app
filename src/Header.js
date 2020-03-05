import React from 'react';
import {
    Grid
} from '@material-ui/core';

export default function Header() {
    return (
        <Grid container justify="center">
            <Grid item>
                <h1>TO DOs</h1>
            </Grid>
        </Grid>
    );
}
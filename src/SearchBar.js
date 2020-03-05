import React, {
    useState
} from 'react';
import {
    Grid,
    InputAdornment,
    TextField,
    IconButton,
} from '@material-ui/core';
import {
    Search,
    Clear,
    Add
} from '@material-ui/icons';

const SearchBar = ({ addItem, searchItem }) => {

    const [searchQuery, setSearchQuery] = useState('');

    function handleChange(e) {
        setSearchQuery(e.target.value);
        searchItem(e.target.value);
    }

    function handleAdd() {
        addItem(searchQuery);
        setSearchQuery('');
    }

    function handleClear(){
        setSearchQuery('');
        addItem(searchQuery);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleAdd();
        }
    }

    return (
        <Grid container justify="center">
            <Grid item xs={10}>
                <TextField fullWidth
                    variant="outlined"
                    placeholder="Search"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={searchQuery}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton color="primary" onClick={handleAdd}>
                                    <Add />
                                </IconButton>
                                <IconButton color="primary" onClick={handleClear}>
                                    <Clear />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default SearchBar;
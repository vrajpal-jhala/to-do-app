import React, {
    useState
} from 'react';
import {
    Paper,
    InputBase,
    IconButton,
    makeStyles
} from '@material-ui/core';
import {
    Search,
    Clear,
    Add
} from '@material-ui/icons';

const useStyle = makeStyles(theme => ({
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.spacing(1),
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
        color: 'rgba(0, 0, 0, 0.25)',
        boxShadow: '0px 2px 1px -1px rgba(255, 0, 0, 0.2), 0px 1px 1px 0px rgba(255, 0, 0, 0.14), 0px 1px 3px 0px rgba(255, 0, 0, 0.12)'
    },
    searchIcon: {
        padding: theme.spacing(2)
    },
    searchInput: {
        flex: 1
    },
    actionBtn: {
        color: 'rgba(0, 0, 0, 0.7)'
    }
}));

const SearchBar = ({ addItem, searchItem }) => {

    const classes = useStyle();

    const [searchQuery, setSearchQuery] = useState('');

    function handleChange(e) {
        setSearchQuery(e.target.value);
        searchItem(e.target.value.trim());
    }

    function handleAdd() {
        if (searchQuery.trim() !== '') {
            addItem(searchQuery.trim());
            setSearchQuery('');
        } else {
            handleClear();
        }
    }

    function handleClear() {
        setSearchQuery('');
        searchItem('');
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleAdd();
        }
    }

    return (
        <Paper
            className={classes.searchBar}
        >
            <Search
                className={classes.searchIcon}
            />
            <InputBase
                className={classes.searchInput}
                placeholder="Search..."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={searchQuery}
            />
            <IconButton
                className={classes.actionBtn}
                onClick={handleAdd}
            >
                <Add />
            </IconButton>
            <IconButton
                className={classes.actionBtn}
                onClick={handleClear}
            >
                <Clear />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
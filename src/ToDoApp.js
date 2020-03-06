import React from 'react';
import {
    Container,
    Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Header from './Header';
import SearchBar from './SearchBar';
import ToDoList from './ToDoList';
class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [],
            filteredList: [],
            type: '',
            open: false,
            message: ''
        }
    }

    addNewItem = (newItem) => {
        var exist = false;
        if (this.state.toDoList.includes(newItem)) {
            exist = true
        }

        const currData = this.state.toDoList;
        const newData = currData.concat(exist ? [] : [newItem]);

        this.setState({
            toDoList: newData,
            filteredList: newData,
            type: exist ? 'error' : 'success',
            message: exist ? 'Already exist!' : 'Item added!',
            open: newItem === '' ? false : true
        });
    }

    removeItem = (item) => {
        const afterRemoval = this.state.toDoList.filter(listItem => listItem !== item);

        this.setState({
            toDoList: afterRemoval,
            filteredList: afterRemoval,
            type: 'error',
            message: 'Item removed!',
            open: true
        });
    }

    filterItems = (searchQuery) => {
        const afterFiltration = this.state.toDoList.filter((item) => {
            return item.includes(searchQuery) ? true : searchQuery === '' ? true : false;
        });

        this.setState({
            filteredList: afterFiltration
        });
    }

    handleClose = () => {
        this.setState({
            open: false,
        });
    }

    render() {
        const { open, type, message, filteredList } = this.state;

        function Alert(props) {
            return <MuiAlert elevation={6} variant="filled" {...props} />;
        }

        return (
            <Container maxWidth="md">
                <Header />
                <SearchBar addItem={this.addNewItem} searchItem={this.filterItems} />
                <ToDoList data={filteredList} removeItem={this.removeItem} />
                <Snackbar open={open} autoHideDuration={1000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={type}>
                        {message}
                    </Alert>
                </Snackbar>
            </Container>
        );
    }
}

export default ToDoApp;
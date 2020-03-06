import React from 'react';
import Store from 'store';
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

        const localData = Store.get('toDoList');

        const initialData = localData === undefined ? [] : JSON.parse(localData);

        this.state = {
            toDoList: initialData,
            filteredList: initialData,
            noResults: false,
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
        Store.set('toDoList', JSON.stringify(newData));

        console.log(newData);

        this.setState({
            toDoList: newData,
            filteredList: newData,
            noResults: false,
            type: exist ? 'error' : 'success',
            message: exist ? 'Already exist!' : 'Item added!',
            open: true
        });
    }

    removeItem = (item) => {
        const afterRemoval = this.state.toDoList.filter(listItem => listItem !== item);
        Store.set('toDoList', JSON.stringify(afterRemoval));

        this.setState({
            toDoList: afterRemoval,
            filteredList: afterRemoval,
            noResults: false,
            type: 'error',
            message: 'Item removed!',
            open: true
        });
    }

    filterItems = (searchQuery) => {
        const afterFiltration = this.state.toDoList.filter((item) => {
            return item.includes(searchQuery) ? true : false;
        });

        this.setState({
            filteredList: afterFiltration,
            noResults: afterFiltration.length === 0 && searchQuery !== '' ? true : false
        });
    }

    handleClose = () => {
        this.setState({
            open: false,
        });
    }

    render() {
        const { filteredList, noResults, open, type, message } = this.state;

        function Alert(props) {
            return <MuiAlert elevation={6} variant="filled" {...props} />;
        }

        return (
            <Container maxWidth="md">
                <Header />
                <SearchBar addItem={this.addNewItem} searchItem={this.filterItems} />
                {filteredList.length > 0 && <ToDoList data={filteredList} removeItem={this.removeItem} />}
                {noResults && <h2 style={{ textAlign: 'center' }}>{'No Results. Add?'}</h2>}
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
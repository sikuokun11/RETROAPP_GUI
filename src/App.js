import React from 'react';
import './App.css';
import BoardList from './components/BoardList';
import SearchBar from './components/pagecomponents/SearchBar';

function App() {
    return (
        <div className = 'todo-app'>
            <h1 className="title">My boards</h1>
            <SearchBar/>
            <h1 className="titlechild2">Public boards</h1>
            <BoardList/>
        </div>
    );
}

export default App;
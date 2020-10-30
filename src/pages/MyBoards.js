import React from 'react'
import BoardList from '../components/BoardList'
import HeaderPage from '../components/pagecomponents/HeaderPage'
import SearchBar from '../components/pagecomponents/SearchBar'
import '../App.css';

function MyBoards() {
    return (
        <div>
            <HeaderPage/>
            <div className = 'todo-app'>
                <h1 className="title">My boards</h1>
                <SearchBar/>
                <h1 className="titlechild2">Public boards</h1>
                <BoardList/>
            </div>
        </div>
    )
}

export default MyBoards

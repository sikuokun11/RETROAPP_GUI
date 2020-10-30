import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyBoards from './pages/MyBoards';
import SignInUp from './pages/login/SignInUp';

function App() {
    return (
        <Router>
            <div className="MainApp">
                <Switch>
                    <Route path="/myboards" component={MyBoards}/>
                    <Route path="/" exact component={SignInUp}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
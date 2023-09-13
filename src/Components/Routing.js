import React from 'react';
import{BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Game from './Game';

class Routing extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" Component={Home}/>
                <Route path="/game" Component={Game}/>
            </BrowserRouter> 
        )
    }
};
export default Routing;
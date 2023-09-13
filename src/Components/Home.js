import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <>
            <h1>Snake Game</h1>
            <p>This game is made react</p>
            <Link to="/game">Play game!</Link>
            </>
            
        )
    }
};

export default Home;
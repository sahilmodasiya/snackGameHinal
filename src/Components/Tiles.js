import React from 'react';

class Tiles extends React.Component{
    constructor(props){
        super(props);
        this.state={
            style:{
                aspectRatio:"1",
                float:"left"
            }
        }
    }
    static getDerivedFromProps(props, state){
        return{
            style:{backgroundColor:props.color}
        }
    }
    render(){
        return(
            <div className='game-tiles' style={this.state.style}></div>
        )
    }
    
};
export default Tiles;
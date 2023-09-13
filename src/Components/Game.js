import React from "react";
import Tiles from "./Tiles";
import './gamecontainer.css';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gameMatrix:[],
            snakeList:[[1,1],[1,2],[2,2]]
        
            }
        }   
        static getDerivedStateFromProps(props,state){
            var temp=[];
            for(var i=0;i<19;i++){
                var temp2=[];
                    for(var j=0;j<19;j++) temp2.push(0);
                    temp.push(temp2);
            }
            state.snakeList.map((i)=>{
                var x=i[0], y=i[1];
                temp[x][y]=1;
            })
            return({gameMatrix:temp});
        }
        renderGameMatrix=()=>{
            return this.state.gameMatrix.map((row)=>{
                return row.map((t)=>{
                    return <Tiles color={t?"blue":"lightgrey"}/>
                })
            })
        }
    render(){
        return(
            <div class="game-container">
            {
                this.renderGameMatrix()
            }
            </div>
        )
    }
};

export default Game;
import React from "react";





const Featured = () => {
    return (
      
        <div className="featrued">
            <h2>Featured</h2>            
            <div className="card-container">
                <Card color={"blue"}/>
                <Card color={"orange"}/>
                <Card color={"aqua"}/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}
  
function Card(props){
    console.log(props.color)
    return (
        
        <div className="card" style={{backgroundColor:props.color }}>
            <div className="img" >
                <img src="https://media.istockphoto.com/id/899308580/photo/musicians-on-a-stage.jpg?s=612x612&w=0&k=20&c=PuM6qJiFY8DAsVG4eTaUeekPKqjz8QUVCgqDbNLqX4g=" alt="hello" />
            </div>
            <div className="description">
                <h5>hi guys</h5>
                <h3>hellooooooooo</h3>
            </div>
        </div>
    
    )
  }
  export default Featured;
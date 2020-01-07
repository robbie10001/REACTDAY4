import React, { Component } from "react";
import Canvas from "./Canvas";
//PROP SYSTEM 
//1, we import a component. 
//2, we mount a component ( < ColourSelector)
//3, we can add as many key value pairs as we want into a component.
//4. Through the App componet (the parent component) we pass data down to (child component) Colour Selector 
//5. We then call this data with the props system 
//6. We access this information either through the use of dot notion or bracket notation. 

class App extends Component { 
//a class based component must always have a render method. 
render() {
    //the render method must always return something. 
    return (
        <div>
            <h1>Welcome to your drawing pad</h1>
            
            <Canvas /> 
        </div>
    );
}

}

export default App; 

//We can use Lifting state to make our children accessable to their parents. 
//We do this by using a callback function from the parent into the child component. 
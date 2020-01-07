import React, { Component } from "react";



//we can call onInputChange whatever we want, however, onInputChange is the correct syntax.
//on (Input) > The name of the tag we are looking for and (Change), is is onChange =   element
//we should make all of our event handlers using fat arrow syntax! 

   // }
    //a class based component must always have a render method. 
  class ColourSelector extends Component { 
    render() {
        const  { hex, onColourSelectorChange } = this.props; //2 
        //the render method must always return something. 
        return (
            <input type="color" value={hex} onChange={onColourSelectorChange} /> 
        );
    }

static defaultProps = {
    hex: "#FFFFFF"
    }
}

export default ColourSelector; 
          
           
//Events 
 //onChange is the name of the event, and we just give it a callback function. 
//we can get the value of the target(event) and log changes to the console. For example, 
//onChange={(event) => console.log(event.target.value)} This will show us the different colours as we change the colours within our console. 

//static is a property that cannot be changed, its similar to a Const but for a class. 
//defaultProps is a property within ColourSelector 
/* static defaultProps = {
hex: "#FFFFFF"
*/

//a uncontrolled element is when an element tells us what it's value is. Once we change it, we are no longing in control of what it's value is.
//This is considered bad practice, as it reduces the predictability of our applications. We want to tell our input what colour it always is. 
//We want to control this value.  For example,  <input type="color" defaultValue= {hex || "#FFFFFF"} onChange={this.onInputChange} />

//in order to make it a controlled element we need to give it a value. 
//if our elements need to handle values, we want to do it in a controlled way! 
//for example, this is not a controlled element, although we have lost lots of our functionality! <input type="color" Value= {hex} onChange={this.onInputChange} />



//in order to do this we need to do some internal data management. In order do to this we are going to need to use state. For example, 
//state = { hex: this.props.hex};
//render() {const { hex } = this.state; //2 
//{ this.setState({ hex: event.target.value })}} /> //3

/*
THIS KEY WORD 

class Animal {
  constructor() {
    this.talk = this.speak.bind(this)
    //however, we don't use bind, although we may see it in other peoples code! 
    //inside of these speak method, the value of 'this' will be 'this'
    //when the constructor is called, this is = to Lion, we are binding the value of 'this' to lion.
    //if you are going to bind, you most often do it in the constructor. 
  };
  
  setLanguage(language) {
    this.language = language;
    //lion.language
  };
//
  speak(){
    return this.language;
    //lion.language = roar
  };
};

const lion = new Animal();
lion.setLanguage("roar");
//lion.language = "roar";
lion.language //roar
lion.speak() 
//speak(){
// return lion.language;


//lion.speak();
//the rule of them for this, is whatever it to the left of the function is what we re going to return. 

const cat = {
  language: "meow",
  speak: lion.speak 
  //this reference the speak method on this (speak) function. In this context this would be the cat. 
};

cat.language() //meow 


const speak = lion.speak 
speak()
//this returns undefined becuase we are just referencing the method without calling it.
//we have said const speak = function() { this.language }. When we just call speak, there is no object for it to look into. 



*/

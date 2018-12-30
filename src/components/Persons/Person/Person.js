import React, {Component} from 'react';
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClassName from "../../../hoc/WithClassName";

class Person extends Component {

      constructor (props) {
        super(props);
        console.log("[Person.js] Inside Constructor", props);
      }
    
      componentWillMount () {
        console.log("[Person.js] Inside componentWillMount()");
      }
    
      componentDidMount () {
        console.log("[Person.js] Inside componentDidMount()");
      }
      
    //const rnd = Math.random();
    //if (rnd > 0.7) {
    //    throw new Error("Something went wrong!");
    //}
    render () {
        console.log("[Person.js] Inside render()");
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
}

export default withClassName(Person, classes.Person);
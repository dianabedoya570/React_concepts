import React, { Component } from "react";

class Input extends Component {
  constructor(props) { 
      console.log("props",props)
      super(props);
      this.state = {value: ""};
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) { 
    console.log(event.target.value);
    console.log("this",this);
    this.setState((state, propos) => {
      return {...state, value: event.target.value };
    });
    //console.log("state", state);
   
    this.props.setValue(event.target.value) // propiedad que es metodo( me permite actualizar el estado)
  }
  componentDidMount() { 
    console.log("ya se rederizó!!--pedir mi data (API) ")
  }

  componentDidUpdate(prevProps, prevState,snapshot){ 
    console.log("component did update", prevProps, prevState,snapshot)

  }


    render() { 
      return (
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          type={this.props.type|| "text" }
          onChange={this.handleChange}
        />);

  }
}
export default Input;
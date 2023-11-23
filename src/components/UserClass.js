import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 1

        }
        console.log("parent component")
    }
     
componentDidMount(){
    console.log("Parent component did mount");
}

componentWillUnmount(){
    console.log("parent will unmount");
}

    render(){
        const {name, location} = this.props;
        const {count2} = this.state;

        console.log("render of component");
        return (
        <div>

            <h1> count : {this.state.count}</h1>
            <button onClick={() => {
                this.setState({
                    count: this.state.count +1,
                    count2: this.state.count2 +1
                });
            }}> Increase the count</button>
            <h1> count2 : {count2} </h1>
            
            <h2> {name}</h2>
            <h3> {location}</h3>
        </div>
        );
    }
}

export default UserClass;
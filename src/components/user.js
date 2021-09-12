import React from "react";
import {render} from "react-dom";

class User extends React.component {
    constructor(props) {
        super(props);
        this.State({
            username:"",
            firstName:"",
            lastName:""
        });

    }
    componentDidMount () {

    }
}

function getUser(user) {
    if (user === "username1") {
        return this.props.username = "username1", this.props.firstName = "bo", this.props.lastName = "Bosen";
    } else if(user === "username2") {
        return this.props.username = "username2", this.props.firstName = "Lone", this.props.lastName = "Lonesen";
    }





render() {
       return (

       );
    }
}




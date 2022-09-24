import React from "react";
import classes from "./User1.module.css";

class User1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ul className={classes.user3}>
                    <li>name: {this.props.info.name}</li>
                    <li>age: {this.props.info.age}</li>
                </ul>
            </>
        );
    }
}

export default User1;
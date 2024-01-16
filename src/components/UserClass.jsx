import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {name, location} = this.props
        return <div>
            <h2>Name : {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact</h3>
        </div>
    }
}
export default UserClass;
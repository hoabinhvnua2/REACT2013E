import React, { Component } from 'react';

class User extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('aa')
    }

    componentDidUpdate() {
        console.log('bbb')
    }

    handleClcik = () => {
        this.setState({
            count: 1
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
                {count}

                <button onClick={this.handleClcik}> + </button>
            </div>
        );
    }
}

export default User;
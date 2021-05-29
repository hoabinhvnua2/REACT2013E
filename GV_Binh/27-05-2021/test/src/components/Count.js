import React, {Component}  from 'react';

class Counter extends Component {
    constructor() {
        super()
        // create state
        this.state = {
            count: 5,
            loading: false,
            userName: 'React'
        }
    }

    // componentWillMount() {
    //     console.log('Tooi laf WillMount')
    // }


    // componentDidMount() {
    //     console.log('Tôi là did moumt')
    // }
    handleClickCong = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClickTru = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        console.log('Tôi là Render')
        const {count, loading, userName} = this.state
        return(
            <div>
                <p>{userName}</p>
                <p>{count}</p>
                <button onClick={this.handleClickCong}>+</button>
                <button onClick={this.handleClickTru}>-</button>
            </div>
        )
    }
}

export default Counter;
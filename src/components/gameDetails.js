import React from "react";

export default class GameDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            minutes : 0,
            seconds : 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let sec = this.state.seconds;
            let min = this.state.min;
            if(sec === 59) {
                this.setState({minutes : this.state.minutes+1, seconds : 0})
            }
            else {
                this.setState({seconds : this.state.seconds+1})
            }
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <div>{"Moves: "+this.props.moves}</div>
                <div>{`Time:${this.state.minutes}:${this.state.seconds}`}</div>
            </div>
        );
    }
}
import React from "react";

interface IProps {}
interface IState {
    time: Date;
}

export default class Clock extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  timerID = 0;

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div className="clock">
        <span className="text-huge">{this.state.time.toLocaleTimeString()}</span>
        <br />
        <span className="text-medium">{this.state.time.getDay()}/{this.state.time.getMonth()}/{this.state.time.getFullYear()}</span>
      </div>
    );
  }
}
import React, { Component } from 'react'

export class TimerClass extends Component {

  componentDidMount() {
    console.log("el componente de clase existe!")
  }

  render() {
    return (
      <div>TimerClass</div>
    )
  }
}

export default TimerClass
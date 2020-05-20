import React, { Component } from 'react'

export default class DisplayBox extends Component {
    handleEdit = () => {
        // this.props.setEdit()
    }
    render() {
    let {color} = this.props.box
        return (
        <div className="single-box-pane" onClick={this.handleEdit}>
            <div className={`color-pane ${color}`}></div>
            <div>{color}</div>
        </div>
        )
    }
}
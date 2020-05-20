import React, { Component } from 'react'

export default class Box extends Component {

    state = {
        showNum: true
    }

    toggleNum = () => {
        this.setState(prevState => {return {showNum: !prevState.showNum}})
    }

    render() {
        let {thisBoxType} = this.props
        let {color, width, height} = this.props.allBoxTypes[thisBoxType]
        return (
            <li className={`${color} ${width} ${height}`}>
                {this.state.showNum ? <h3 className="box-label">{this.props.boxNumber}</h3> : null}
            </li>
        )
    }
}

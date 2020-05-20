import React, { Component } from 'react'
import Box from '../components/Box'

export default class Grid extends Component {

    // state = {
    //     boxList: []
    // }

    // componentDidMount() {
    //     let boxTypes = this.props.numBoxTypes
    //     let blankBoxes = new Array(this.props.boxCount).fill('')
    // }

    render() {
        let blankBoxes = new Array(this.props.boxCount).fill('').map((box, index) => {
            return <Box 
                key={index + 1}
                boxNumber={index + 1}
                thisBoxType={Math.floor(Math.random() * (this.props.boxTypes.length))}
                allBoxTypes={this.props.boxTypes}
                setEdit={this.props.setEdit}
            />
        })
        return (
            <div className="viewer">
                <ul>{blankBoxes}</ul>
            </div>
        )
    }
}

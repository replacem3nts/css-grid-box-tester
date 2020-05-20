import React, { Component } from 'react'
import DisplayBox from './DisplayBox'

export default class TopBoxDisplay extends Component {
    // bogeyEdit = (e) => {
    //     this.props.setEdit(e.target.name)
    // }
    render() {
        let displayBoxes = this.props.boxTypes.map((box, index) => {
            return <DisplayBox
                key={index + 1}
                box={box}
                // setEdit={this.props.setEdit}
            />
        })
        return (
            <div name={this.props.boxTypes[0].id} className="header" onClick={this.bogeyEdit}>
                {displayBoxes}
            </div>
        )
    }
}

import React, { Component } from 'react'
import DisplayBox from './DisplayBox'

export default class BoxForm extends Component {

    handleUpdate = (evt) => {
        let {id} = this.props.boxToEdit
        let {name, value} = evt.target
        this.props.handleUpdate(id, name, value)
    }

    render() {
        const converter = {
            'rows': [{'name':'rowone', 'value': 1},{'name':'rowtwo', 'value': 2},{'name':'rowthree', 'value': 3},{'name':'rowfour', 'value': 4},{'name':'rowfive', 'value': 5}],
            'columns': [{'name':'columnone', 'value': 1},{'name':'columntwo', 'value': 2},{'name':'columnthree', 'value': 3},{'name':'columnfour', 'value': 4},{'name':'columnfive', 'value': 5}]
        }
        // let {color, width, height} = this.props.boxToEdit
        let colorOptions = this.props.colors.map(color => {
            return <option className={color} key={color} value={color}>{color}</option>
        })
        let rowOptions = converter.rows.map(row => {
            return <option key={row.value} value={row.name}>{row.value}</option>
        })
        let columnOptions = converter.columns.map(column => {
            return <option key={column.value} value={column.name}>{column.value}</option>
        })

        return (
            <div className="editor">
                <div className="grid-options">
                    <h2>Grid Options:</h2>
                    <input type='text'></input>
                    <button>Reset Grid</button>
                    <button>Toggle Number Labels</button>
                    <button>Save Current Grid</button>
                </div>
                <div className="box-options">
                    <h2>Box Options:</h2>
                    <DisplayBox box={this.props.boxToEdit}/>
                    <div>
                        <label>Select Color:</label>
                        <select name='color' value={this.props.boxToEdit.color} onChange={this.handleUpdate}>
                            {colorOptions}
                        </select>
                    </div>
                    <div>
                        <label>Select Width:</label>
                        <select name='width' value={this.props.boxToEdit.width} onChange={this.handleUpdate}>
                            {rowOptions}
                        </select>
                    </div>
                    <div>
                        <label>Select Height:</label>
                        <select name='height' value={this.props.boxToEdit.height} onChange={this.handleUpdate}>
                            {columnOptions}
                        </select>
                    </div>
                    <button>Remove Box</button>
                </div>
            </div>
        )
    }
}

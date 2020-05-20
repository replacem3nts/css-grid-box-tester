import React, { Component } from 'react'
import BoxForm from './BoxForm'
import Grid from '../containers/Grid'
import TopBoxDisplay from './TopBoxDisplay'

export default class MainPage extends Component {
    state = {
        numBoxTypes: 5,
        boxCount: 20,
        boxTypeList: [{}],
        boxColor: [
            'steelblue','cadetblue','lightcyan','lightgoldenrodyellow','khaki',
            'palegreen','seagreen','lightsalmon','tomato','darkorchid','sienna',
            'peru','slategrey','floralwhite'
        ],
        boxWidth: ['rowone','rowtwo','rowthree','rowfour','rowfive'],
        boxHeight: ['columnone','columntwo','columnthree','columnfour','columnfive'],
        boxToEdit: 0
    }

    componentDidMount() {
        this.generateNewTypes()
    }

    generateNewTypes = () => {
        let {numBoxTypes, boxColor, boxWidth, boxHeight} = this.state

        let blankList = this.setBlankTypes(numBoxTypes)
        let colors = this.getRandUniqueElements(boxColor, numBoxTypes)
        let widths = this.getRandElements(boxWidth, numBoxTypes)
        let heights = this.getRandElements(boxHeight, numBoxTypes)

        let newBoxTypes = blankList.map((type, index) => {return {
            ...type,
             color: colors[index],
             width: widths[index],
             height: heights[index],
            }
        })

        this.setState({boxTypeList: newBoxTypes})
    }

    setBlankTypes = (num) => {
        let blankArray = new Array(num).fill({})
        return blankArray.map((blank, index) => {return {'id': index + 1}})
    }

    getRandUniqueElements = (sourceArray, num) => {
        let sourceCopy = [...sourceArray]
        let placeholderArray = new Array(num).fill('')

        return placeholderArray.map(() => sourceCopy.splice(Math.floor(Math.random() * sourceCopy.length), 1)[0])
    }

    getRandElements = (sourceArray, num) => {
        let sourceCopy = [...sourceArray]
        let placeholderArray = new Array(num).fill('')
        return placeholderArray.map(() => {return sourceCopy[Math.floor(Math.random() * sourceCopy.length)]})
    }

    handleBoxUpdate = (id, name, value) => {
        let boxId = parseInt(id)
        let boxToUpdate = this.state.boxTypeList.find(box => box.id === boxId)
        let boxIndex = this.state.boxTypeList.findIndex(box => box.id === boxId)
        let newBox = {...boxToUpdate, [name]:value}
        let newBoxList = [...this.state.boxTypeList]
        newBoxList.splice(boxIndex, 1, newBox)
        this.setState({boxTypeList: newBoxList})
    }

    setBoxToEdit = (id) => {
        console.log(id)
        // let boxId = parseInt(id)
        // this.setState({boxToEdit: boxId})
    }
    
    render() {
        return (
            <div>
                <TopBoxDisplay 
                    boxTypes={this.state.boxTypeList}
                    setEdit={this.state.setBoxToEdit}
                />
                <div className="main">
                    <Grid
                        boxTypes={this.state.boxTypeList}
                        boxCount={this.state.boxCount}
                    />
                    <BoxForm
                        handleUpdate={this.handleBoxUpdate}
                        boxToEdit={this.state.boxTypeList[this.state.boxToEdit]}
                        colors={this.state.boxColor}
                    />
                </div>
            </div>
        )
    }
}
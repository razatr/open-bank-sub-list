import React, { Component } from "react"
import { SMALL_TEXT, NORMAL_TEXT, LARGE_TEXT, MAIN_COLOR1 } from '../../constants'

class DescriptionTitle extends Component {

    render() {

        const { value, title } = this.props

        return <div style={ { display: 'flex', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px'} }>
            <div>{ title }</div>
            <div>{ value }</div>
        </div>
    }
}

export default DescriptionTitle
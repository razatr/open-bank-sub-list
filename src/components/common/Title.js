import React, { Component } from "react"
import { SMALL_TEXT, NORMAL_TEXT, LARGE_TEXT, MAIN_COLOR1 } from '../../constants'

class Title extends Component {

    getStyle() {
        const { size } = this.props
        switch (size) {
            case 'small':
                return {color: MAIN_COLOR1, fontSize: SMALL_TEXT + 'em', paddingBottom: SMALL_TEXT*(0.7) + 'em'}
            case 'normal':
                return {color: MAIN_COLOR1, fontSize: NORMAL_TEXT + 'em', paddingBottom: NORMAL_TEXT*(0.7) + 'em'}
            case 'large':
                return {color: MAIN_COLOR1, fontSize: LARGE_TEXT + 'em', paddingBottom: LARGE_TEXT*(0.7) + 'em'}
            default:
                return {color: MAIN_COLOR1, fontSize: NORMAL_TEXT + 'em', paddingBottom: NORMAL_TEXT*(0.7) + 'em'}
        }
    }

    render() {

        const { value } = this.props

        return <div style={this.getStyle()}>
            { value }
        </div>
    }
}

export default Title
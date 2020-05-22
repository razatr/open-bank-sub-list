import React, { Component } from "react"

class DescriptionTitle extends Component {

    render() {

        const { value, title } = this.props

        return <div className='subscription-description-title'>
            <div>{ title }</div>
            <div>{ value }</div>
        </div>
    }
}

export default DescriptionTitle
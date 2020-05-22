import React, { Component } from 'react'
import logo from './Header_logo.svg'

class Index extends Component {
    render() {
        return <div id='header-img'>
            <img id='main-logo' src={ logo } alt="Банк Открытие"/>
            <div id="header-contact">
                <div id="header-phone">8 800 700-787-7</div>
                <div id="header-call">бесплатный звонок по России</div>
            </div>
        </div>
    }
}

export default Index
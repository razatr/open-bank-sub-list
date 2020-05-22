import React, { Component } from 'react'
import logo from './Header_logo.svg'

class HeaderImg extends Component {
    render(){
        return <div id = 'header-img'>
            <img src={logo} alt="Банк Открытие" style={{paddingLeft: '70px'}}/>
            <div id="header-contact">
                <div id="header-phone">8 800 700-787-7</div>
                <div id="header-call">бесплатный звонок по России</div>
            </div>
        </div>
    }
}

export default HeaderImg
import React, { Component } from 'react'
import HorizontalMenu from "./HorizontalMenu";
import HeaderImg from "./HeaderImg";

class Header extends Component {
    render() {
        return <React.Fragment>
            <HeaderImg/>
            <HorizontalMenu/>
        </React.Fragment>
    }
}

export default Header
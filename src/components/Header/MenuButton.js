import React, { Component } from 'react'
import { MAIN_COLOR1, MAIN_COLOR2 } from "../../constants"
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

class MenuButton extends Component {


    getIcon() {
        const { icon } = this.props

        const style = { color: MAIN_COLOR2 }

        switch (icon) {
            case 'mail':
                return <MailOutlineIcon style={ style }/>
            case 'settings':
                return <SettingsIcon style={ style }/>
            case 'exit':
                return <MeetingRoomIcon style={ style }/>
        }
    }

    getNotification() {
        const { notification } = this.props
        if (notification)
            return <div className="menu-button-notification">{ notification }</div>
    }

    render() {
        const { title, active, icon } = this.props
        return <div className={ (icon ? 'menu-button-icon ' : '') + 'menu-button' }
                    style={ { backgroundColor: active ? MAIN_COLOR1 : 'none', position: 'relative' } }>
            { this.getNotification() }
            <div style={ {
                margin: "auto",
                fontSize: "1em",
                color: active ? MAIN_COLOR2 : 'black'
            } }>{ icon ? this.getIcon() : title }</div>
        </div>
    }
}

export default MenuButton
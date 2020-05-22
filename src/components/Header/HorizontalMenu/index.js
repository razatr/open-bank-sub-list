import React, { Component } from 'react'
import MenuButton from "../MenuButton";
import lock from "./Lock.svg";
import { MAIN_COLOR1, MAIN_COLOR2 } from "../../../constants";

class HorizontalMenu extends Component {

    getUserInfo() {
        return (<div style={ { margin: "auto 0", fontSize: "0.8em" } }>
            <span style={ { color: MAIN_COLOR2 } }>Здравствуйте,</span><br/>
            <span style={ { color: MAIN_COLOR1 } }>Рашидов Азат</span>
        </div>)
    }

    getMenu() {
        return <div style={ { display: 'flex' } }>
            <MenuButton title = "Главная"/>
            <MenuButton title = "Мои финансы"/>
            <MenuButton title = "Мои подписки" active/>
            <MenuButton title = "Платежи и переводы"/>
            <MenuButton title = "Безопасность"/>
            <MenuButton icon="mail"/>
            <MenuButton icon="settings"/>
            <MenuButton icon="exit"/>
        </div>
    }

    render() {
        return <div id='horizontal-menu'>
            <div style={ { flexGrow: 1, display: 'flex', paddingLeft: '50px' } }>
                <img src={lock} alt="Вход" style={{paddingLeft: "15px", paddingRight: "15px"}}/>
                { this.getUserInfo() }
            </div>
            <div style={ {
                display: 'flex',
                justifyContent: 'flex-end'
            } }>{ this.getMenu() }</div>
        </div>
    }
}

export default HorizontalMenu
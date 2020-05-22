import React, { Component } from 'react'
import MenuButton from "./MenuButton";
import lock from "./Lock.svg";
import { MAIN_COLOR1, MAIN_COLOR2, SMALL_TEXT } from "../../../constants";
import { connect } from 'react-redux'

class HorizontalMenu extends Component {

    getUserInfo() {
        return (<div style={ { margin: "auto 0", fontSize: SMALL_TEXT + 'em' } }>
            <span style={ { color: MAIN_COLOR2 } }>Здравствуйте,</span><br/>
            <span style={ { color: MAIN_COLOR1 } }>Рашидов Азат</span>
        </div>)
    }

    getMenu() {
        const { newSub } = this.props

        return <div style={ { display: 'flex' } }>
            <MenuButton title="Главная"/>
            <MenuButton title="Мои финансы"/>
            <MenuButton title="Мои подписки" active notification={ newSub.length }/>
            <MenuButton title="Платежи и переводы"/>
            <MenuButton title="Безопасность"/>
            <MenuButton icon="mail"/>
            <MenuButton icon="settings"/>
            <MenuButton icon="exit"/>
        </div>
    }

    render() {
        return <div id='horizontal-menu'>
            <div id='horizontal-menu-left'>
                <img id='lock-img' src={ lock } alt="Вход"/>
                { this.getUserInfo() }
            </div>
            <div style={ {
                display: 'flex',
                justifyContent: 'flex-end'
            } }>{ this.getMenu() }</div>
        </div>
    }
}

export default connect((state) => ({
    newSub: state.subscriptions.get('newSub').toArray()
}))(HorizontalMenu)
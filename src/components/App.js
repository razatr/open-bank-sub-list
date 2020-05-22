import React, { Component } from 'react'
import { withTranslation } from "react-i18next"
import i18n from '../localization/i18n'
import Body from './Body/Body'
import Header from './Header/Header'

class App extends Component {

    changeLanguage(lng){
        i18n.changeLanguage(lng)
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
                {/*<button onClick={() => this.changeLanguage('ru')}>ru</button>
                <button onClick={() => this.changeLanguage('en')}>en</button>*/}
            </React.Fragment>
        )
    }
}

export default withTranslation()(App)
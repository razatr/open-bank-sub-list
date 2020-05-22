import React, { Component } from "react"
import Subscription from "./Subscription"
import Title from "../../common/Title"
import { connect } from 'react-redux'
import { loadSubscriptions } from '../../../AC'
import { MAIN_COLOR2 } from "../../../constants"

class SubList extends Component {

    getBody() {
        const { loading, error } = this.props
        if (loading) {
            return <Title value='Загрузка'/>
        } else if (error) {
            return <Title value='Ошибка при загрузке списка подписок'/>
        } else {
            const body = []
            body.push(<div style={ { height: '1px', backgroundColor: MAIN_COLOR2 } }></div>)
            const { subscriptions } = this.props //TODO Сделать аккодреон
            for (let id in subscriptions) {
                const { title, nextDate, initialDate, price, currency, categoryId, notificationDelay, site, trial } = subscriptions[id]
                body.push(<Subscription id = {id}
                                        title={ title }
                                        date={ nextDate }
                                        initialDate={ initialDate }
                                        price={ price }
                                        currency={ currency }
                                        categoryId={ categoryId }
                                        notificationDelay={ notificationDelay }
                                        site={ site }
                                        trial={ trial }/>)
            }
            return body
        }
    }

    render() {

        if (!this.props.loaded)
            this.props.loadSubscriptions()

        return <React.Fragment>
            <Title value="Список подписок" size='large'/>
            { this.getBody() }
        </React.Fragment>
    }
}

export default connect((state) => ({
    loading: state.subscriptions.get('loading'),
    loaded: state.subscriptions.get('loaded'),
    error: state.subscriptions.get('error'),
    subscriptions: state.subscriptions.get('entities')
}), { loadSubscriptions })(SubList)
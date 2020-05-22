import React, { Component } from "react"
import DescriptionTitle from "../../common/DescriptionTitle"
import categories from '../../../data/categories'

class Subscription extends Component {

    state = {
        isOpen: false,
        loading: false,
        loaded: true,
        error: false
    }

    getDescription() {
        const { isOpen } = this.state
        const { initialDate, price, currency, categoryId, notificationDelay, site } = this.props
        const category = categories[categoryId].title
        if (isOpen) {
            return <div style={ { padding: '10px', borderBottom: '1px solid #efefef' } }>
                <DescriptionTitle title="Стоимость" value={ price + ' ' + currency }/>
                <DescriptionTitle title="Дата оформления" value={ initialDate }/>
                <DescriptionTitle title="Категория" value={ category }/>
                <DescriptionTitle title="Уведомлять за" value={ notificationDelay + ' дня(ей)' }/>
                <DescriptionTitle title="Сайт управления подпиской"
                                  value={ <a className='subscription-site' href={ site } target="_blank">перейти</a> }/>
            </div>
        }
        return ''
    }

    getTrialText() {
        return <div className="trial-text">
            TRIAL
        </div>
    }

    getContent() {
        const { title, date, trial, categoryId } = this.props
        return (<React.Fragment>
            <div className="subscription" style={ { backgroundColor: this.state.isOpen ? '#f8f8f8' : '' } }
                 onClick={ () => {
                     this.setState({ isOpen: !this.state.isOpen })
                 } }>
                <div style={{display:'flex', alignItems: 'center'}}>
                    <div style={ {
                        borderRadius: '5px',
                        width: '10px',
                        height: '10px',
                        backgroundColor: categories[categoryId].color,
                        marginRight: '15px'
                    } }/>
                    Подписка { title }
                </div>
                <div style={ { display: 'flex' } }>
                    { trial === 'true' ? this.getTrialText() : '' }
                    <div>следующее
                        списание { date ? date : 'Неизвестно' }
                    </div>
                </div>
            </div>
            { this.getDescription() }
        </React.Fragment>)
    }

    render() {
        return this.getContent()
    }
}

export default Subscription
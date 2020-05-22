import React, { Component } from 'react'
import RadialChart from "./RadialChart"
import SubList from "./SubList";
import { connect } from "react-redux";

class Body extends Component {

    getColors() {
        const colors = []
        const { categories } = this.props
        for (let key in categories) {
            if (categories[key].subList.length !== 0)
                colors.push(categories[key].color)
        }
        return colors
    }

    getData() {
        const data = []
        const { categories } = this.props
        for (let key in categories) {
            if (categories[key].subList.length !== 0)
                data.push({
                    name: categories[key].title,
                    value: categories[key].subList.length
                })
        }
        return data
    }

    render() {

        return <div id="body">
            <div style={{flexGrow: 1}}>
                <SubList />
            </div>
            <div style={{width: '1px', backgroundColor: '#efefef', boxShadow: '0 0 3px #efefef', padding: 0}} />
            <div>
                <RadialChart data={this.getData()} colors={this.getColors()}/>
            </div>
        </div>
    }
}

export default connect((state) => ({
    categories: state.categories,
    subscriptions: state.subscriptions.get('entities')
}))(Body)
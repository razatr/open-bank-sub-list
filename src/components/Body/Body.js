import React, { Component } from 'react'
import RadialChart from "./RadialChart"
import SubList from "./SubList";

class Body extends Component {
    render() {
        return <div id="body">
            <div style={{flexGrow: 1}}>
                <SubList />
            </div>
            <div style={{width: '1px', backgroundColor: '#efefef', boxShadow: '0 0 3px #efefef', padding: 0}} />
            <div>
                <RadialChart />
            </div>
        </div>
    }
}

export default Body
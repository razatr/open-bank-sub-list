import React, { Component } from 'react'
import { PieChart, Pie, Cell } from 'recharts'

class RadialChart extends Component {

    render() {
        const data = this.props.data
        const COLORS = this.props.colors

        return <PieChart width={ 400 } height={ 400 } onMouseEnter={ this.onPieEnter }>
            <Pie
                data={ data }
                cx={ 200 }
                cy={ 200 }
                innerRadius={ 120 }
                outerRadius={ 160 }
                fill="black"
                paddingAngle={ 3 }
                dataKey="value"
            >
                {
                    data.map((entry, index) => <Cell fill={ COLORS[index % COLORS.length] }/>)
                }
            </Pie>
        </PieChart>
    }
}

export default RadialChart
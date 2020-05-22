import React, { Component } from 'react'
import { PieChart, Pie, Cell } from 'recharts'

class RadialChart extends Component {
    render() {
        const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
            {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return <PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                innerRadius={120}
                outerRadius={160}
                fill="#000"
                paddingAngle={5}
            >
                {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
    }
}

export default RadialChart
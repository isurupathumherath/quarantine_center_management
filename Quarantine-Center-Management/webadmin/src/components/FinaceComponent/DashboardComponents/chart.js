import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Tooltip,  Cell, ResponsiveContainer } from 'recharts';

var CardUsage_Precentage = parseInt(localStorage.getItem("Card_Precentage"))
var GatewayUsage_Precentage = parseInt(localStorage.getItem("Gateway_Precentage"))

const data = [
  { name: 'Group A', value: CardUsage_Precentage },
  { name: 'Group B', value: GatewayUsage_Precentage },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
  render() {
    return (
      <div>
        <PieChart width={700} height={500} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={350}
            cy={250}
            innerRadius={0}
            outerRadius={175}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

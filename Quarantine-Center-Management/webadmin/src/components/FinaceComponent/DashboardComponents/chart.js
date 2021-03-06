import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Tooltip,  Cell, ResponsiveContainer } from 'recharts';

var CardUsage_Precentage = parseInt(localStorage.getItem("Card_Precentage"))
var GatewayUsage_Precentage = parseInt(localStorage.getItem("Gateway_Precentage"))

const data = [
  { name: 'Card Usage Precentage', value: CardUsage_Precentage },
  { name: 'Payment Gateway Usage Precentage', value: GatewayUsage_Precentage },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
  render() {
    return (
      <div>
        <PieChart width={400} height={300} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={200}
            cy={130}
            innerRadius={50}
            outerRadius={125}
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

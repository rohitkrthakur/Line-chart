import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css'
const data = [
  {
    name: 'Januray',
    Iphone: 9000,
  },
  {
    name: 'February',
    Iphone: 2000,
  },
  {
    name: 'March',
    Iphone: 2000,
   
  },
  {
    name: 'April',
    Iphone: 5000,
  },
  {
    name: 'May',
    Iphone: 3000,
  },
  {
    name: 'June',
    Iphone: 6000,
  },
  {
    name: 'july',
    Iphone: 1000,
  },
];

function App() {
  return (
    <>
      
      <h1> A great looking line chart using React.js and recharts, a charting library </h1>
      <div className="responsive-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal="true" vertical="" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Iphone"
              stroke="#8884d8"
              dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}


export default App

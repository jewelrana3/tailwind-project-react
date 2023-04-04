import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

const DashBoard = () => {

    const studentScores = [
        {
          id: 1,
          name: 'John Doe',
          math: 85,
          english: 78,
          bengali: 90
        },
        {
          id: 2,
          name: 'Jane Smith',
          math: 92,
          english: 90,
          bengali: 87
        },
        {
          id: 3,
          name: 'David Lee',
          math: 75,
          english: 83,
          bengali: 80
        },
        {
          id: 4,
          name: 'Emily Chen',
          math: 88,
          english: 92,
          bengali: 85
        },
        {
          id: 5,
          name: 'Daniel Park',
          math: 90,
          english: 87,
          bengali: 82
        },
        {
          id: 6,
          name: 'Lucy Wang',
          math: 93,
          english: 89,
          bengali: 90
        },
        {
          id: 7,
          name: 'Michael Nguyen',
          math: 80,
          english: 85,
          bengali: 79
        },
        {
          id: 8,
          name: 'Sophia Patel',
          math: 95,
          english: 93,
          bengali: 91
        },
        {
          id: 9,
          name: 'Jason Kim',
          math: 82,
          english: 79,
          bengali: 83
        },
        {
          id: 10,
          name: 'Aisha Rahman',
          math: 89,
          english: 91,
          bengali: 94
        }
      ];
      
    return (
        <div>
            <LineChart
            width={500}
            height={400}
            data={studentScores}
            >
            <Line dataKey="math"></Line>
            <Line stroke="#8884d8" dataKey="bengali"></Line>
            <XAxis></XAxis>
            <YAxis></YAxis>
            <Tooltip />
            </LineChart>
            
        </div>
    );
};

export default DashBoard;
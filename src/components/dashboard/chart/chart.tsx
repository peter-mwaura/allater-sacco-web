'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Sun', visit: 4000, click: 2400 },
    { name: 'Mon', visit: 3000, click: 1398 },
    { name: 'Tue', visit: 2000, click: 3800 },
    { name: 'Wed', visit: 2780, click: 3908 },
    { name: 'Thu', visit: 1890, click: 4800 },
    { name: 'Fri', visit: 2390, click: 3800 },
    { name: 'Sat', visit: 3490, click: 4300 },
];

const Chart = () => {
    return (
        <div className="h-[450px] bg-[#12994A] p-6 rounded-lg shadow-md">
            <h2 className="text-white font-bold text-xl mb-4">Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                    <XAxis dataKey="name" stroke="#ffffffcc" />
                    <YAxis stroke="#ffffffcc" />
                    <Tooltip
                        contentStyle={{
                            background: '#ffffff',
                            borderRadius: '8px',
                            color: '#333',
                            border: 'none',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        }}
                        labelStyle={{ color: '#12994A', fontWeight: 'bold' }}
                        itemStyle={{ color: '#12994A' }}
                    />
                    <Legend wrapperStyle={{ color: 'white' }} />
                    <Line
                        type="monotone"
                        dataKey="visit"
                        stroke="#82ca9d"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="click"
                        stroke="#fff"
                        strokeDasharray="5 5"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;

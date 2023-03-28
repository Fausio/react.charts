
import React from 'react';
import { PieChart, Pie, Tooltip, Bar, BarChart,Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


function SimplePieChart() {

    const myStyle = {
        title: {
            "margin-top": "30px"
        },

        container: {
            "width": "100%",
            "height": "100%"
        },

        table: {
            "width": "100%"
        }
    }


    const data = [

        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ]




    const dataBar = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];



    return (
        <div style={myStyle.title}>
            <label  >SimplePieChart Works</label>
            <br />


            <table   style={myStyle.table}>
                <tr>
                    <td>
                        <label>SimplePieChart Works</label>
                        <hr />
                        <PieChart width={300} height={220}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={true}
                                data={data}
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </td>


                    <td>
                        <label>SimpleBarChart</label>
                        <hr />

                        <ResponsiveContainer width={500} height={500}>
                            <BarChart
                                width={500}
                                height={300}
                                data={dataBar}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                               
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>

                    </td>

                    <td>
                        <label>SimplePieChart Works</label>
                        <hr />
                        <PieChart width={300} height={220}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={true}
                                data={data}
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart></td>
                </tr>
            </table>






        </div>
    );
}

export default SimplePieChart;

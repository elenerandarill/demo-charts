import logo from './logo.svg';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar, Legend } from 'recharts';
import {getPomiary} from "./services/pomiary";


function App() {
    return (
        <>
            <p>This is Chart.</p>
            <LineChart width={600} height={300} data={getPomiary()} margin={{
                top: 15,
                right: 20,
                bottom: 5,
                left: 0
            }}
            >
                <Line type="monotone" dataKey="uv" stroke="#8084d8"/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey={"name"}/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
            <p>This is Area Chart.</p>
            <AreaChart width={730} height={250} data={getPomiary()}
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3bd192" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3bd192" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
            </AreaChart>

            <p>This is Bar Chart</p>
            <BarChart
                width={500}
                height={300}
                data={getPomiary()}
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
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </>
    );
}

export default App;

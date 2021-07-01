import logo from './logo.svg';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {getPomiary} from "./services/pomiary";


function App() {
    return (
        <LineChart width={600} height={300} data={getPomiary()} margin={{
            top: 15,
            right: 20,
            bottom: 5,
            left: 0
            }}
        >
            <Line type="monotone" dataKey="uv" stroke="#8084d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey={"name"}/>
            <YAxis/>
            <Tooltip/>
        </LineChart>

    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { LineChart, Line } from 'recharts';
import {getPomiary} from "./services/pomiary";


function App() {
    return (
        <div className="App">
            <LineChart width={400} height={400} data={getPomiary()}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    );
}

export default App;

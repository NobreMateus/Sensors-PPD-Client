import logo from './logo.svg';
import './App.css';
import Sensor from './components/Sensor';
import { useCallback, useState } from 'react';

function App() {

  const [sensors, setSensors] = useState([
    {sensorType: "temperatura"},
    {sensorType: "umidade"},
    {sensorType: "velocidade"},
  ])

  const addSensor = useCallback((sType)=>{
    setSensors(old => old.concat({ sensorType: sType}))
  })

  return (
    <div className="App">
      {sensors.map((sensor, num) => (
        <div key={num}>
          <Sensor sensorType={sensor.sensorType} sensorName={`sensor-${num+1}`}/>
        </div>
      ))}
      <div className="add-sensor-container">
        <div style={{fontSize: '24px'}} > 
        + Adicionar novo Sensor
        </div>
        <div>
          <button onClick={()=>addSensor("temperatura")}> Temperatura </button>
          <button onClick={()=>addSensor("umidade")}> Umidade </button>
          <button onClick={()=>addSensor("velocidade")}> Velocidade </button>
        </div>
      </div>
    </div>
  );
}

export default App;

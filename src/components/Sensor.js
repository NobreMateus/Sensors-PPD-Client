import React, { useState, useCallback, useEffect } from 'react'
import styles from './sensor.styles.module.css'
function Sensor(params) {

    // const [sensorType, setSensorType] = useState("")
    const [identifier, setIdentifier] = useState("")
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [value, setValue] = useState(0)

    useEffect(()=>{
        setIdentifier(params.sensorName)
    },[params])

    const sendValues = useCallback(async ()=>{
        if(value< minValue || value>maxValue) {
            await fetch(`http://localhost:3001/${params.sensorType}/${identifier}/${minValue}/${maxValue}/${value}`)
        } else {
            alert("Tudo Ok!")
        }
    }, [identifier, maxValue, minValue, params.sensorType, value])


    const defineBackColor = (sType) => {
        if(sType === "temperatura") {
            return "#f2bbc0"
        } else if(sType === "umidade"){
            return "#cad9fc"
        } else if(sType === "velocidade"){
            return "#e9c6f7"
        }
    }


    return (
        <div className={styles["sensor-container"]} style={{backgroundColor: defineBackColor(params.sensorType)}}>
            <label>Tipo de Sensor</label>
            <input type='text' value={params.sensorType} disabled ></input>

            <label>Identifier:</label>
            <input type='text' value={identifier} onChange={e=>setIdentifier(e.target.value)} ></input>
            
            <label>Valor Minimo</label>
            <input type='text' value={minValue} onChange={e=>setMinValue(e.target.value)} ></input>
            
            <label>Valor Maximo</label>
            <input type='text' value={maxValue} onChange={e=>setMaxValue(e.target.value)} ></input>
            
            <label>Valor</label>
            <input type='text' value={value} onChange={e=>setValue(e.target.value)} ></input>

            <button onClick={()=>sendValues()}>Enviar</button>
        </div>
    )
}

export default Sensor

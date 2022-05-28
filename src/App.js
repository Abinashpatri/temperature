import React, {useState} from "react";
function App() {

  const [temperatureValue, setTemperatureValue] = useState(0);
  const [tempColor, setTempColor] = useState('cold');

  const increaseTemperature = () => {
    const newTemp = temperatureValue + 1;
    if (newTemp >= 15){
      setTemperatureValue('#hot')
    }
    setTemperatureValue(newTemp)
  }
  const decreaseTemperature = () => {
    const newTemp = temperatureValue - 1;
    if (newTemp < 15){
      setTemperatureValue('cold')
    }
    setTemperatureValue(newTemp)
  }


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick= {() => increaseTemperature()}>+</button>
        <button onClick= {() =>decreaseTemperature()}>-</button>
      </div>
    </div>
  );
}

export default App;

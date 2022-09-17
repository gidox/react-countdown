import { useState } from "react";
import reactLogo from "./assets/react.svg";
import add from 'date-fns/add'
import "./App.css";
import { useCountdown } from "./useCountdown";

function App() {
  const [count, setCount] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  const [dateLeft, setDateLeft] = useState(0);

    const { countdown: [min, seconds], init } = useCountdown(dateLeft)
    const handleChangeMinute = (e) => {
      setMinutes(e.target.value)
    }
    const handleChangeSecond = (e) => {
      setSeconds(e.target.value)
    }
    const handleSend = () => {
      setDateLeft(add(new Date(), { minutes: minute, seconds: second}))

      init()
    }

    console.log({min, seconds})


  return (
    <div className="App">
      <h2>{min}:{seconds}</h2>

      <div className="container">
        <div className="inputContainer">
          <div className="form-control">
            <label>Minutes</label>
            <input name="minutes" onChange={handleChangeMinute} type="number" min={1} max={59} />
          </div>
          <div  className="form-control">
            <label>Seconds</label>
            <input name="seconds" onChange={handleChangeSecond}  type="number" min={1} max={59}/>
          </div>
        </div>
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default App;

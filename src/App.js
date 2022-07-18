import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Button";
import OperatorButton from "./OperatorButton";
import NumberButton from "./NumberButton";
import Screen from "./Screen";

function App() {
  const [lastStatus, setLastStatus] = useState("");
  const [status, setStatus] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

   useEffect(() => {
      setInput(status);
   }, [status]);

   useEffect(() => {
      setInput("0");
   }, []);

  
  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(lastStatus) / parseFloat(status));
        break;

      case "+":
        cal = String(parseFloat(lastStatus) + parseFloat(status));
        break;
      case "X":
        cal = String(parseFloat(lastStatus) * parseFloat(status));
        break;
      case "-":
        cal = String(parseFloat(lastStatus) - parseFloat(status));
        break;
      default:
        return;
    }
    setInput("");
    setLastStatus(cal);
    setStatus("");
  };

  const minusPlus = () => {
    if (status.charAt(0) === "-") {
      setStatus(status.substring(1));
    } else {
      setStatus("-" + status);
    }
  };

  const percent = () => {
    lastStatus
      ? setStatus(String((parseFloat(status) / 100) * lastStatus))
      : setStatus(String(parseFloat(status) / 100));
  };

  const reset = () => {
    setLastStatus("");
    setStatus("");
    setInput("0");
  };

  return (
    <div className='App'>
      <div className='calculator'>
     
        <Screen input={input} lastStatus={lastStatus}/>
         
        <Button className={'btn light-gray' } value={'AC'} funct={reset}/>
        <Button className={'btn light-gray' } value={'+/-'} funct={minusPlus}/>
        <Button className={'btn light-gray' } value={'%'} funct={percent}/>
       
        <OperatorButton className={'btn orange'} value={'/'} setTotal={setTotal} setOperator={setOperator} status={status} setStatus={setStatus} lastStatus={lastStatus} setLastStatus={setLastStatus} equals={equals}/>
        
        <NumberButton className={'btn'} value={'7'} status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal} />
        <NumberButton className={'btn'} value={'8'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <NumberButton className={'btn'} value={'9'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <OperatorButton className={'btn orange'} value={'X'} setTotal={setTotal} setOperator={setOperator} status={status} setStatus={setStatus} lastStatus={lastStatus} setLastStatus={setLastStatus} equals={equals}/>

        <NumberButton className={'btn'} value={'4'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <NumberButton className={'btn'} value={'5'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <NumberButton className={'btn'} value={'6'} status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <OperatorButton className={'btn orange'} value={'+'} setTotal={setTotal} setOperator={setOperator} status={status} setStatus={setStatus} lastStatus={lastStatus} setLastStatus={setLastStatus} equals={equals}/>

        <NumberButton className={'btn'} value={'1'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <NumberButton className={'btn'} value={'2'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <NumberButton className={'btn'} value={'3'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <OperatorButton className={'btn orange'} value={'-'} setTotal={setTotal} setOperator={setOperator} status={status} setStatus={setStatus} lastStatus={lastStatus} setLastStatus={setLastStatus} equals={equals}/>

        <NumberButton className={'btn zero'} value={'0'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <NumberButton className={'btn orange'} value={'.'}  status={status} setStatus={setStatus} setLastStatus={setLastStatus} total={total} setTotal={setTotal}/>
        <Button className={'btn orange'} value={'='} funct={equals}/>

      </div>
    </div>
  );
}

export default App;
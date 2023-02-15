import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Calculator(){
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    op: ""
  });
  
  function handleNumber(val){
    let newValue = val;
    if(!calc.isInitial){
      newValue = calc.current + val;
    }
    setCalc({current: newValue, total: calc.total, isInitial: false, op: calc.op});
  }
  
  function handleOperator(val){
    const total = calculation();
    
    setCalc({current: total.toString(), total: total.toString(), isInitial: true, op: val});
  }
  
  function calculation(){
    let total = parseInt(calc.total);
    
    switch(calc.op){
      case "/":
        total /= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "+":
        total += parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    return total;
  }
  
  function clear(){
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      op: ""
    })
  }
  
  return(
    <div className="calculator">
      <div className="display">{calc.current}</div>
      <CalcButton value="1" onClick={handleNumber}/>
      <CalcButton value="2" onClick={handleNumber}/>
      <CalcButton value="3" onClick={handleNumber}/>
      <CalcButton value="/" onClick={handleOperator} className="operator"/>
      
      <CalcButton value="4" onClick={handleNumber}/>
      <CalcButton value="5" onClick={handleNumber}/>
      <CalcButton value="6" onClick={handleNumber}/>
      <CalcButton value="*" onClick={handleOperator} className="operator"/>
      
      <CalcButton value="7" onClick={handleNumber}/>
      <CalcButton value="8" onClick={handleNumber}/>
      <CalcButton value="9" onClick={handleNumber}/>
      <CalcButton value="-" onClick={handleOperator} className="operator"/>
      
      <CalcButton value="C" onClick={clear}/>
      <CalcButton value="0" onClick={handleNumber}/>
      <CalcButton value="=" onClick={handleOperator}/>
      <CalcButton value="+" onClick={handleOperator} className="operator"/>
    </div>
  )
}

function CalcButton(props){
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}

//ReactDOM.render(<div className="app-container"><Calculator /></div>, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Calculator />
);
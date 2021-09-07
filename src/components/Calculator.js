import React from "react";
import { useState } from "react";
import { reset } from "axe-core";

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [currentNum, setCurrentNum] = useState(0);
  const [savedNum, setSavedNum] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const [calculationType, setCalculationType] = useState("");

  const writeNumber = newNum => {
    setShowTotal(false);
    currentNum == 0
      ? setCurrentNum(newNum)
      : setCurrentNum(parseFloat(currentNum + `${newNum}`));
  };

  const addToMemory = symbol => {
    setSavedNum(currentNum);
    symbol !== calculationType && setCalculationType(symbol);
    setCurrentNum(0);
  };

  const calculate = () => {
    if (calculationType !== "" && currentNum !== "") {
      const lastNum = total !== 0 ? total : savedNum;
      switch (calculationType) {
        case "add":
          setTotal(lastNum + currentNum);
          break;
        case "sub":
          setTotal(lastNum - currentNum);
          break;
        case "multiply":
          setTotal(lastNum * currentNum);
          break;
        case "divide":
          lastNum !== 0 && setTotal(lastNum / currentNum);
          break;
        default:
          break;
      }
      setShowTotal(true);
    }
  };

  const reset = () => {
    setCurrentNum(0);
    setTotal(0);
    setSavedNum(0);
    setCalculationType("");
    setShowTotal(false);
  };

  return (
    <div className="calculator">
      <section className="result">
        <div id="total">
          {showTotal ? total : currentNum !== 0 ? currentNum : savedNum}
        </div>
      </section>
      <section className="buttons-grid">
        <button className="btn-primary" id="0" onClick={() => writeNumber(0)}>
          0
        </button>
        <button className="btn-primary" id="1" onClick={() => writeNumber(1)}>
          1
        </button>
        <button className="btn-primary" id="2" onClick={() => writeNumber(2)}>
          2
        </button>
        <button className="btn-primary" id="3" onClick={() => writeNumber(3)}>
          3
        </button>
        <button className="btn-primary" id="4" onClick={() => writeNumber(4)}>
          4
        </button>
        <button className="btn-primary" id="5" onClick={() => writeNumber(5)}>
          5
        </button>
        <button className="btn-primary" id="6" onClick={() => writeNumber(6)}>
          6
        </button>
        <button className="btn-primary" id="7" onClick={() => writeNumber(7)}>
          7
        </button>
        <button className="btn-primary" id="8" onClick={() => writeNumber(8)}>
          8
        </button>
        <button className="btn-primary" id="9" onClick={() => writeNumber(9)}>
          9
        </button>
        <button
          className="btn-primary"
          id="add"
          onClick={() => addToMemory("add")}
        >
          +
        </button>
        <button
          className="btn-primary"
          id="sub"
          onClick={() => addToMemory("sub")}
        >
          -
        </button>
        <button
          className="btn-primary"
          id="multiply"
          onClick={() => addToMemory("multiply")}
        >
          x
        </button>
        <button
          className="btn-primary"
          id="divide"
          onClick={() => addToMemory("divide")}
        >
          /
        </button>
        <button className="btn-primary" id="dot">
          .
        </button>
        <button className="btn-secondary" id="del">
          DEL
        </button>
        <button className="btn-secondary" id="reset" onClick={() => reset()}>
          RESET
        </button>
        <button className="btn-third" id="equal" onClick={() => calculate()}>
          =
        </button>
      </section>
    </div>
  );
};

export default Calculator;

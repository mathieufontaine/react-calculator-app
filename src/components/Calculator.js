import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [currentNum, setCurrentNum] = useState(0);
  const [savedNum, setSavedNum] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const [calculationType, setCalculationType] = useState("");

  const writeNumber = newNum => {
    if (showTotal == false) {
      currentNum == 0
        ? setCurrentNum(newNum)
        : setCurrentNum(parseFloat(currentNum + `${newNum}`));
    }
  };

  const deleteNumber = () => {
    if (currentNum !== 0) {
      setCurrentNum(
        currentNum.toString().substr(0, currentNum.toString().length - 1)
      );
    }
  };

  const addToMemory = symbol => {
    setCurrentNum(0);
    savedNum == 0 && setSavedNum(currentNum);
    symbol !== calculationType && setCalculationType(symbol);
    setShowTotal(false);
  };

  const calculate = () => {
    if (calculationType !== "" && currentNum !== "") {
      let newNum;
      switch (calculationType) {
        case "add":
          newNum = savedNum + currentNum;
          break;
        case "sub":
          newNum = savedNum - currentNum;
          break;
        case "multiply":
          newNum = savedNum * currentNum;
          break;
        case "divide":
          newNum = savedNum !== 0 && savedNum / currentNum;
          break;
        default:
          break;
      }
      setTotal(newNum);
      setSavedNum(newNum);
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
        <button
          className="btn-primary"
          id="dot"
          onClick={() =>
            showTotal == false && setCurrentNum(currentNum.toString() + ".")
          }
        >
          .
        </button>
        <button
          className="btn-secondary"
          id="del"
          onClick={() => deleteNumber()}
        >
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

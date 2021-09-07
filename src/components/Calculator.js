import React from "react";

const Calculator = () => {
  return (
    <div className="calculator">
      <section className="result">
        <div id="total">0</div>
      </section>
      <section className="buttons-grid">
        <button className="btn-primary" id="0">
          0
        </button>
        <button className="btn-primary" id="1">
          1
        </button>
        <button className="btn-primary" id="2">
          2
        </button>
        <button className="btn-primary" id="3">
          3
        </button>
        <button className="btn-primary" id="4">
          4
        </button>
        <button className="btn-primary" id="5">
          5
        </button>
        <button className="btn-primary" id="6">
          6
        </button>
        <button className="btn-primary" id="7">
          7
        </button>
        <button className="btn-primary" id="8">
          8
        </button>
        <button className="btn-primary" id="9">
          9
        </button>
        <button className="btn-primary" id="add">
          +
        </button>
        <button className="btn-primary" id="sub">
          -
        </button>
        <button className="btn-primary" id="multiply">
          x
        </button>
        <button className="btn-primary" id="slash">
          /
        </button>
        <button className="btn-primary" id="dot">
          .
        </button>
        <button className="btn-secondary" id="del">
          DEL
        </button>
        <button className="btn-secondary" id="reset">
          RESET
        </button>
        <button className="btn-third" id="equal">
          =
        </button>
      </section>
    </div>
  );
};

export default Calculator;

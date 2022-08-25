import { useState } from "react";
import Button from "./button";
import "./calculator.css";
import * as math from "mathjs"
import { FiDelete } from "react-icons/fi"
const Calculator = () => {
  const [text, setText] = useState([""]);
  const [result, setResult] = useState("");

  function addToText(value) {
    const texts = [...text, value].reduce((total, item) => {
      return total + item
    })

    setText(texts)
  }
  function changeResult() {
    // const input = text.join('')
    setResult(math.evaluate(text))
  }
  function removeValue() {
    setText('')
    setResult('')
  }

  function changeValue(e) {
    const input = e.currentTarget;
    // if (typeOf(input) == 'number') {
    //   console.log('is number');
    // } else {
    //   console.log("in not number");
    // }
    setText(input.value)

  }
  return (
    <>
      <div dir="ltr" className="calculator">


        <div className="calculator-screen">
          <h5 className="result">{result}</h5>
          <input onChange={changeValue} type="text" value={text} />
          {/* {text} */}
          <span onClick={() => setText(text.slice(0, -1))} className="deleteCharacter"><FiDelete /></span>
        </div>

        <div className="calculator-keys">

          <Button handelText={addToText} className="operator button_calculator" value="+" content="+" />
          <Button handelText={addToText} className="operator button_calculator" value="-" content="-" />
          <Button handelText={addToText} className="operator button_calculator" value="*" content="&times;" />
          <Button handelText={addToText} className="operator button_calculator" value="/" content="&divide;" />

          <Button handelText={addToText} className=" button_calculator" value="7" content="7" />
          <Button handelText={addToText} className=" button_calculator" value="8" content="8" />
          <Button handelText={addToText} className=" button_calculator" value="9" content="9" />

          <Button handelText={addToText} className=" button_calculator" value="4" content="4" />
          <Button handelText={addToText} className=" button_calculator" value="5" content="5" />
          <Button handelText={addToText} className=" button_calculator" value="6" content="6" />

          <Button handelText={addToText} className=" button_calculator" value="1" content="1" />
          <Button handelText={addToText} className=" button_calculator" value="2" content="2" />
          <Button handelText={addToText} className=" button_calculator" value="3" content="3" />

          <Button handelText={addToText} className=" button_calculator" value="0" content="0" />

          <Button handelText={addToText} className="decimal button_calculator" value="." content="." />
          <Button handelText={removeValue} className="all-clear button_calculator" content="AC" />

          <Button handelText={changeResult} className="equal-sign button_calculator" content="=" />

        </div>
      </div>
    </>
  );
};

export default Calculator;

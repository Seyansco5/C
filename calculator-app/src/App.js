import  "./App.css";
import { useState, useRef} from "react";

function App() {
const inputRef = useRef(null);
const resultRef = useRef(null);
const [result, setResult] = useState(0);


function addition(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
}

function subtraction(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
}

function multiply(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
}

function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
}

function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;

}

function resetResult(e) {
    e.preventDefault();
    setResult(0);
}

return (
<div className="App">
 <div>
    <h1>My Calculator App</h1>
 </div>
<form>
 <p ref= {resultRef}>
    {result}
 </p>
<input 
pattern="[0-9]"
ref={inputRef}
type="number"
placeholder="Type a number"
/>
<button onClick={addition}>+</button>
<button onClick={subtraction}>-</button>
<button onClick={multiply}>*</button>
<button onClick={divide}>/</button>
<button onClick={resetInput}>Reset Input</button>
<button onClick={resetResult}>Reset Result</button>
</form>
</div>
)


}


export default App;
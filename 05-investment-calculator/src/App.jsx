import { useState } from "react";

import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Results from "./components/Results";

const INITIAL_INPUTTEDVALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [inputValues, setInputtedValues] = useState(INITIAL_INPUTTEDVALUES);

  function handleInputValueChange(inputId, newValue) {
    setInputtedValues(prevValue => {
      return {
        ...prevValue,
        [inputId]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput inputValues={inputValues} onInputChange={handleInputValueChange}/>
      <Results inputValues={inputValues}/>
    </>
  );
}

export default App;

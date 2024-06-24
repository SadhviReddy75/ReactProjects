import {useState} from 'react';
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx"
function App() {
  const[userInput,setUserInput] = useState({
    initialInvestment:1500,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});

const inputIsValid = userInput.duration >=1;

function handleChange(inputIdentifier,newValue){
  setUserInput(prevInput => {
      return {
          ...prevInput,
          [inputIdentifier]: +newValue, //+ will convert string to number
      }
  });
}
  return (
    <>
    <Header />
    <UserInput input={userInput} onChange = {handleChange} />
    {!inputIsValid && (<p className = "center">Please enter a duration greater than zero.</p>)}
    {inputIsValid && <Results input = {userInput} />}
    </>
  );
}

export default App

import React ,{ useState } from "react";
import Control from "./components/Control";

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const handleSelect = ()=>{
    if(anecdotes[selected+1]=== undefined){
      return setSelected(0)
    }
    return setSelected(selected+1)
  }
  
  const handleVote = ()=>{
    return setVote(vote+1)
  }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div>
        <h1>Anecdotes</h1>
        <p>{anecdotes[selected]}</p>
        <Control handleVote={handleVote} handleSelect={handleSelect}/>
      </div>
    </div>
  );
    
}

export default App;


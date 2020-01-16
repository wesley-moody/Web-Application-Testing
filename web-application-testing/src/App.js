import React, { useState, Component } from 'react';
import './App.css';
import Scoreboard from './components/Display';
import Dashboard from './components/Dashboard'; 
import styled from 'styled-components'

function App() {
  const [ balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)
  
  const Container = styled.div`
  border: 3px dotted black`

  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }
  const strike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)      
    } else {
      setStrikes(strikes + 1)
    }
  }
  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }
  return (
    <Container className='container'>
      <Scoreboard balls={balls} strikes={strikes} />
      <Dashboard balls={balls} strikes={strikes} hits={hit}  />
    </Container>
  );
}

export default App;






  // constructor() {
  //   super();
  //   this.state ={
  //     balls: 0,
  //     strikes: 0,
  //     hits: 0
  //   };
  // }

//   render() {
//     return (
//       <div className='App'>
//         <Scoreboard state={this.state} />
//       </div>
//     );
//   }
// }



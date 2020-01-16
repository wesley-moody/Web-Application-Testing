import React from 'react'
import styled from 'styled-components'

export default function Display(props) {
    const Container = styled.div`
    `
    return (
        <Container>
            <h2>Strikes : {props.strikes}</h2>
            <h2>Balls : {props.balls}</h2>
        </Container>
    )
} 

// import React from 'react';

// const Scoreboard = () => {
//   return (
//     <Container>
//       <section className='home-team'>
//       <h2>Royals</h2>
//         <div className='home-score'>
//           <button className='home-score-btn'>Add a Run</button>
//       <section className='home-bse'>
//         <div className='home-balls'>
//           <button className='home-balls-btn'>Add a Ball</button>
//         <div className='home-strikes'>
//           <button className='home-strikes-btn'>Add a Strike</button>
//         <div className='home-errors'>
//           <button className='home-errors-btn'>Add an Error</button>
//         </div>
//         </div>
//         </div>
//       </section>
//         </div>
//       </section>
//       <section className='away-team'>
//       <h2>Royals</h2>
//         <div className='away-score'>
//           <button className='away-score-btn'>Add a Run</button>
//       <section className='away-bse'>
//         <div className='away-balls'>
//           <button className='away-balls-btn'>Add a Ball</button>
//         <div className='away-strikes'>
//           <button className='away-strikes-btn'>Add a Strike</button>
//         <div className='away-errors'>
//           <button className='away-errors-btn'>Add an Error</button>
//         </div>
//         </div>
//         </div>
//       </section>
//         </div>
//       </section>
//       </Container>
//   )
// };

// export default Scoreboard;


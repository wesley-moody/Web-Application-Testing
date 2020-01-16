import React from "react";
import styled from "styled-components";

export default function Dashboard(props) {
  const Button = styled.button`
    width: 10%;
    background-color: lightgrey;
    color: royalblue;
    height: 2rem;
    margin-top: 1rem;
    border-radius: 12%;
  `;

  const Buttons = styled.div`
    width: 90%;
    margin-left: 5%;
    background-color: black;
    display: flex;
    justify-content: space-around;
  `;
  return (
    <Buttons>
      <Button className='button' onClick={props.hit}>
        Hit
      </Button>
      <Button className='button' onClick={props.ball}>
        Ball
      </Button>
      <Button className='button' onClick={props.strike}>
        Strike
      </Button>
      <Button className='button' onClick={props.error}>
        Error
      </Button>
    </Buttons>
  );
}

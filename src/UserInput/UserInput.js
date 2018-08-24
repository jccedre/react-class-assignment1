import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 1em 0.5em 1em 1em;
	background-image: linear-gradient(to right, #10abff, #1beabd);
  background-size: 300% 150%;
  border: 1px solid transparent;
  border-radius: 50px;
  display: inline-block;
  outline: 0;
  transition: background 0.3s, padding 0.5s, border 1s;
  color: white;
  cursor: pointer;
  font-size: 1em;


  &::selection {
    background: #F22B29;
  }

  &:hover {
    background-image: linear-gradient(to right, #10abff, #1beabd);
    background-position: 50% 150%;
  }

  &:focus,
  &:active {
    outline: 0;
    outline-offset: 0;
    padding: 1.2em 0.5em 1.2em 1.2em;
    border: 1px solid #F49D37;
  }
`;

const userInput = (props) => {
  return (
    <StyledInput type="text" onChange={props.changed} value={props.username} />
    //<input type="text" onChange={props.changed} value={props.username} />
  )
};

export default userInput;

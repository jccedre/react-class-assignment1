import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { main } from './Styles/Main';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

const StyledApp = styled.section`
  margin: 1em auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 75em;
  padding: 1em;
`
class App extends Component {

  state = {
    username: 'Jean',
  }

  usernameChangeHandler = (event) => {
    this.setState( {
      username: event.target.value,
    })

  }


  render() {
    return (
      <ThemeProvider theme={main}>
        <StyledApp>
          <UserInput username={this.state.username} changed={this.usernameChangeHandler}></UserInput>
          <UserOutput username={this.state.username}></UserOutput>
          <UserOutput></UserOutput>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;

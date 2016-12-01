import React, { Component } from 'react';
import Button from './components/Buttons/Button'

class App extends Component {
  render() {
    return (
      <div>
        <Button>
          Click Me Bro
        </Button>
        <Button type='warning' />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Button from './components/Buttons/Button'

class App extends Component {
  render() {
    return (
      <div>
        <Button>Default</Button>
        <Button type='primary' outline>Primary</Button>
        <Button type='danger' size='small'>Danger</Button>
        <Button type='warning' outline>Warning</Button>
        <Button type='success'>Success</Button>
      </div>
    )
  }
}

export default App;

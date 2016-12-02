import React, { Component } from 'react';
import Button, { ButtonExamples } from './components/Buttons/Button'

class App extends Component {
  render() {
    return (
      <div className='ph3 ph5-ns mt0-ns mb5-ns pt0-ns pb5'>
        <div className='mw8 center'>
          <h3 className='f2 mb4 mb5-ns mt5 mt6-ns pb2 bb'>Buttons</h3>
					<ButtonExamples />
        </div>
      </div>
    )
  }
}

export default App

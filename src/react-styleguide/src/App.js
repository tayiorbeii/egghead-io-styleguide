import React, { Component } from 'react';
import Button from './components/Buttons/Button'

class App extends Component {
  render() {
    return (
      <div className='ph3 ph5-ns mt0-ns mb5-ns pt0-ns pb5'>
        <div className='mw8 center'>

          <h3 className='f2 mb4 mb5-ns mt5 mt6-ns pb2 bb'>Buttons</h3>
					<div className='flex flex-row-ns justify-around flex-wrap items-center'>
						<Button>Default</Button>
						<Button type='primary' size='cta'>Primary</Button>
						<Button type='success' outline>Success</Button>
						<Button type='warning' size='small'>Warning</Button>
						<Button type='danger' size='small' outline>Danger</Button>
					</div>
        </div>
      </div>
    )
  }
}

export default App

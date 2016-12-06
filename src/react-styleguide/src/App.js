import React, { Component } from 'react';
import { ButtonExamples, ButtonExampleCode, ButtonPropsTable } from './components/Buttons/Button'
import { InputExamples, InputExampleCode } from './components/Inputs/Input'
import CodeBlock from './components/GuideElements/CodeBlock'
import PropTable from './components/GuideElements/PropTable'
import './assets/stylesheets/build.css'

class App extends Component {
  render() {
    const Header = ({title}) => <h3 className='f2 mb4 mb5-ns mt5 mt6-ns pb2 bb'>{title}</h3>

    return (
      <div className='ph3 ph5-ns mt0-ns mb5-ns pt0-ns pb5'>
        <div className='mw8 center'>
          <Header title='Buttons' />
          <ButtonExamples />
          <CodeBlock code={ButtonExampleCode} />
          <PropTable rows={ButtonPropsTable} />
        </div>

        <div className='mw8 center'>
          <Header title='Inputs' />
          <InputExamples />
          <CodeBlock code={InputExampleCode} />
        </div>

      </div>
    )
  }
}

export default App

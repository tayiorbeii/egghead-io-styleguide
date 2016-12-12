import React, { Component } from 'react';
import { ButtonExamples, ButtonExampleCode, ButtonPropsTable } from './components/Buttons/Button'
import { InputExamples, InputExampleCode, InputPropsTable } from './components/Inputs/Input'
import { CheckboxExamples, CheckboxExampleCode,
         CheckboxPropsTable } from './components/Checkboxes/Checkboxes'
import { RadioButtonGroupExamples, RadioButtonGroupExampleCode,
         RadioButtonGroupPropsTable } from './components/Radios/Radio'
import CodeBlock from './components/GuideElements/CodeBlock'
import PropTable from './components/GuideElements/PropTable'
import './assets/stylesheets/build.css'

const GuideBlocks = [
  {
    title: 'Buttons',
    component: <ButtonExamples />,
    exampleCode: ButtonExampleCode,
    propRows: ButtonPropsTable
  },
  {
    title: 'Inputs',
    component: <InputExamples />,
    exampleCode: InputExampleCode,
    propRows: InputPropsTable
  },
  {
    title: 'Checkboxes',
    component: <CheckboxExamples />,
    exampleCode: CheckboxExampleCode,
    propRows: CheckboxPropsTable
  },
  {
    title: 'Radio Button Group',
    component: <RadioButtonGroupExamples />,
    exampleCode: RadioButtonGroupExampleCode,
    propRows: RadioButtonGroupPropsTable
  },
  
]

class App extends Component {

  render() {
    const GuideBlock = ({title, component, exampleCode, propRows}) => {
      return (
        <div className='ph3 ph5-ns mt0-ns mb5-ns pt0-ns pb2'>
          <div className='mw8 center'>
            <h3 className='f2 mb4 mb5-ns mt5 mt6-ns pb2 bb'>{title}</h3>
            {component}
            <CodeBlock code={exampleCode} />
            <PropTable rows={propRows} />
          </div>
        </div>
      )
    }

    return (
      <div>
        {GuideBlocks.map((block, i) => <GuideBlock {...block} key={i} />)}
      </div>
    )
  }
}

export default App

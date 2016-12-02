import React, { Component } from 'react';
import { ButtonExamples, ButtonExampleCode } from './components/Buttons/Button'
import CodeBlock from './components/GuideElements/CodeBlock'

class App extends Component {
  render() {
    return (
      <div className='ph3 ph5-ns mt0-ns mb5-ns pt0-ns pb5'>
        <div className='mw8 center'>
          <h3 className='f2 mb4 mb5-ns mt5 mt6-ns pb2 bb'>Buttons</h3>
					<ButtonExamples />
					<CodeBlock code={ButtonExampleCode}/>

					<table className='dt collapse mw-100 w-100 mv2' cellSpacing='0' cellPadding='0'>
						<thead>
							<tr>
								<th className='pl0 pr3 tl f4 bb'>Prop</th>
								<th className='pl0 pr3 tl f4 bb'>Type</th>
								<th className='pl0 pr3 tl f4 bb'>Description</th>
							</tr>
						</thead>
							<tbody>
								<tr>
									<td className='bb pl0 pr3 tl bb'>
										<pre>href</pre>
									</td>
									<td className='bb pl0 pr3 tl bb'>
										<pre>string</pre>
									</td>
									<td className='bb pl0 pr3 tl bb'>Feeds a URL to the Button</td>
								</tr>
								<tr>
									<td className='bb pl0 pr3 tl bb'>
										<pre>type</pre>
									</td>
									<td className='bb pl0 pr3 tl bb'>
										<pre>oneOf(['success', 'warning', 'danger', 'primary', 'default'])</pre>
									</td>
									<td className='bb pl0 pr3 tl bb'>Styles the button accordingly</td>
								</tr>
							</tbody>
					</table>

        </div>
      </div>
    )
  }
}

export default App

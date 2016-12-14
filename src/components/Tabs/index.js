import React, {Component} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
Tabs.setUseDefaultStyles(false)
import {map} from 'lodash'

export default class extends Component {

  state = {
    selected: 0,
  }

  handleSelect = (index) => (
    this.setState({
      selected: index,
    })
  )

  render() {
    const {groups} = this.props

    return (
      <Tabs onSelect={this.handleSelect}>

        <TabList className='list pa0 ma0 bg-moon-gray flex-ns br2 br--top'>
          {map(groups, (group, index) => (
            <Tab
              key={index}
              className={`
                f6
                pv3 ph4 ph3-ns
                ttu
                pointer
                bl bl-0-ns bb-ns bw2 bw1-ns
                ${this.state.selected === index
                  ? 'b--orange black'
                  : 'b--transparent black-40'
                }
              `}
            >
              {group.title}
            </Tab>
          ))}
        </TabList>

        {map(groups, (group, index) => (
          <TabPanel 
            key={index}
            className='pa3'
          >
            {group.component}
          </TabPanel>
        ))}  

      </Tabs>
    )
  }
}

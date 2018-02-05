import React from 'react'

export default class InfoAddonFixer extends React.Component {
  componentDidMount () {
    // This is an INCREDIBLY ugly hack, but it's just for the storybook
    const el = document.querySelector('#root > div > div')
    if (el) {
      el.style.position = 'absolute'
      el.style.height = '100vh'
      el.style.top = '0px'
      el.style.left = '0px'
      el.style.right = '0px'
      el.style.bottom = '0px'
    }
  }
  render () {
    return (
      <div className='infoAddonFixer' style={{height: '100vh'}}>
        {this.props.children}
      </div>
    )
  }
}

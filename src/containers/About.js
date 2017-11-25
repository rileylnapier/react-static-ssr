import React from 'react'
import universal from 'react-universal-component'

const UniversalComponent = universal(import('../components/MyComponent'))

export default class About extends React.Component {
  render () {
    return <UniversalComponent />
  }
}

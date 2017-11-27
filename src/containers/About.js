import React from 'react'
import universal from 'react-universal-component'

const UniversalComponent = universal(import('../components/MyComponent'))
export default () => <UniversalComponent />

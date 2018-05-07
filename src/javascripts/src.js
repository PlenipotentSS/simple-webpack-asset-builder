//import react
import React from 'react'
window.React = React


//setup ujs
import './vendor/react_ujs'
import * as components from './components'
Object.keys(components).forEach(function(componentKey) {
  window[''+componentKey] = components[componentKey];
})


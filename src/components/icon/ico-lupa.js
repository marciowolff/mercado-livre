import React from 'react'

const Lupa = ({width, height, ...props}) =>
  <svg {...props} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle id="circle" cx="11" cy="11" r="6" stroke="currentColor" fill="transparent" strokeWidth="2"/>
    <path id="path" d="M15 15L21 21" stroke="currentColor" strokeWidth="2" fill=""/>
  </svg>

export default Lupa

import React from 'react'

const Close = ({width, height, ...props}) =>
  <svg {...props} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width={width} height={height} fill="black" fillOpacity="0"></rect>
    <path d={`M6 ${width}L${height} 6`} stroke="currentColor" strokeWidth="2"></path>
    <path d={`M${width} ${width}L6 6`} stroke="currentColor" strokeWidth="2"></path>
  </svg>

export default Close

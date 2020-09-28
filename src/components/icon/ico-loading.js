import React from 'react'

const Loading = ({width, height, ...props}) =>
  <svg {...props} width={width} height={height} viewBox={`-4 -4 46 46`} stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="5">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"/>
            </path>
        </g>
    </g> 
  </svg>

export default Loading

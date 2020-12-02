import React from 'react'
import './styles.css'
function Loading() {
  return (
    <div className="wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span> Caregando Imagens...</span>
    </div>
  )
}

export default Loading

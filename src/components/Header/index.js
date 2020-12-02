import React from 'react'
import './styles.css'
function Header({ radom }) {
  return (
    <div className="conteinerHeader">
      <h2>Bora Gerar umas IMG!?</h2>
      <button className="btn" onClick={radom}>
        Gerar
      </button>
    </div>
  )
}

export default Header

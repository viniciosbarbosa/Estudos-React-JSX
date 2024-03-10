import React from 'react'
import './GameOver.css'

const GameOver = ({retry , score}) => {
  return (
    <div>
      <h1>GameOver</h1>
      <h2>Sua Pontuacao foi <span>{score}</span></h2>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver
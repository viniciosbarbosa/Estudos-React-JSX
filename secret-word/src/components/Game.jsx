import React, { useState , useRef } from 'react'
import './Game.css'

const Game = (
  {verifyLetter , 
    pickedWord , 
    pickedCategory , 
    letters , 
    guessedLetters , 
    guesses , 
    score,
    wrongLetters
  }) => {

    const [letter , setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) =>{
      e.preventDefault()

      letterInputRef.current.focus()

      verifyLetter(letter)

      setLetter("")   
    }

  return (
    // <div>
    //   <h1>Game</h1>
    //   <button onClick={verifyLetter}>Finalizar Jogo</button>
    // </div>

    <div className="game">
      <p className="points">
        Pontuacao : {score}
      </p>

      <h1>Adivinha a palavra</h1>

      <h3 className="tip">
        Dica sobre a palavra : <span>{pickedCategory}</span>
      </h3>

      <p>Voce ainda tem {guesses} tentativa</p>

      <div className="wordContainer">
      {letters.map((wordLetter, i) => (
        guessedLetters.includes(wordLetter) ? 
        (<span key={i} className="letter">{wordLetter}</span>) : 
        (<span key={i} className="blankSquare">{}</span>)
      ))}
      </div>






      <div className="letterContainer">
        <p>Tente Adivinha uma letra da palavra</p>

        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name='letter' 
            maxLength={1} 
            ref={letterInputRef}
            required 
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            />
        </form>

        <button type='submit' onClick={handleSubmit} >Jogar!</button>
      </div>

      <div className="wrongLettersContainer">
          <p>Letras ja usadas:</p>
          {wrongLetters.map((letter , i ) =>(
            <span key={i}>{letter},</span>
          ))}
      </div>

    </div>
  )
}

export default Game
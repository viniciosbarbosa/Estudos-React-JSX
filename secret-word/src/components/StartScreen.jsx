import './StartScreen.css'



const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botao para comecar a jogar</p>
        <button onClick={startGame}>Comecar o jogo</button>
    </div>
  )
}

export default StartScreen
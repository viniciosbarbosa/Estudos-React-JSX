import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//react
import { useCallback , useEffect , useState } from 'react'
//dados
import {wordsList} from './data/words'
//components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

const guessesQty = 3

function App() {
  const [gameStage , setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord , setPickedWord] = useState("")
  const [pickedCategory , setPickedCategory] = useState("")
  const [letters , setLetters] = useState([])

  const [guessedLetters , setGuessedLetters] = useState([])
  const [wrongLetters , setWrongLetters] = useState([])

  const [guesses , setGuesses] = useState(guessesQty)
  const [score , setScore ] = useState(0)

  const pickWorkAndCategory = useCallback(() =>{
   // Pega a quantidade de categorias
      const categories = Object.keys(words);

      // Gera um número aleatório e retorna a categoria
      const category = categories[Math.floor(Math.random() * categories.length)];

      // Sabendo a categoria, entra dentro dela e gera um número aleatório para pegar um valor existente
      const wordsInCategory = words[category];
      const word = wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];



    return {word , category}
  }, [words])

 
  const startGame = useCallback(() =>{ 
    clearLetterStates()
    const {word , category } = pickWorkAndCategory()

    console.log(word , category)

    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) =>(
      l.toLowerCase()
    ))

    console.log(wordLetters);

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    

    setGameStage(stages[1].name)
  }, [pickWorkAndCategory])

  const verifyLetter = (letter) =>{
    const normalizedLetter = letter.toLowerCase()

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters)=>[
        ...actualGuessedLetters, normalizedLetter,
      ])
    } else{
      setWrongLetters((actualWrongLetters)=>[
        ...actualWrongLetters, normalizedLetter,
      ])

      setGuesses((actualGuessed) => actualGuessed - 1)
    }
    
  }
  
  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {

    if(guesses <=0){
      clearLetterStates()

      setGameStage(stages[2].name)
    }

  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore+= 100)

      startGame()
    }
    
  }, [guessedLetters , letters , startGame])

  const retry = () =>{
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }

  return (
    <div className="app">
        {gameStage === "start" && (<StartScreen startGame={startGame}/>)}

        {gameStage === "game" && (<Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters}
        guessedLetters={guessedLetters}
        guesses={guesses}
        score={score}
        wrongLetters={wrongLetters}
      />)}
        

        {gameStage === "end" && (<GameOver retry={retry} score={score} />)}
    </div>
  )
}

export default App

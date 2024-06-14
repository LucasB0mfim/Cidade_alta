import wallpaper from '../../assets/images/wallpaper.jpg'
import React, { useState, useEffect, useRef } from 'react'
import * as S from './styles'

const Game: React.FC = () => {
  const [sequence, setSequence] = useState<string[]>([])
  const [currentKeyIndex, setCurrentKeyIndex] = useState<number>(0)
  const [userInput, setUserInput] = useState<string>('')
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [timeRemaining, setTimeRemaining] = useState<number>(5) // Tempo inicial em segundos
  const [score, setScore] = useState<number>(0)
  const [gameStarted, setGameStarted] = useState<boolean>(false) // Estado para controlar se o jogo começou

  const gameContainerRef = useRef<HTMLDivElement>(null) // Referência para o container do jogo

  // Função para gerar uma sequência aleatória de 6 letras
  const generateRandomSequence = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let randomSequence = ''
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length)
      randomSequence += alphabet[randomIndex]
    }
    return randomSequence.split('')
  }

  // Função para iniciar um novo jogo
  const startGame = () => {
    const newSequence = generateRandomSequence()
    setSequence(newSequence)
    setCurrentKeyIndex(0)
    setUserInput('')
    setGameOver(false)
    setTimeRemaining(5) // Reinicia o tempo para 5 segundos
    startTimer() // Inicia o contador regressivo
    setGameStarted(true) // Marca o jogo como iniciado
    gameContainerRef.current?.focus() // Foca o container do jogo
  }

  // Inicia o timer com um intervalo de 1 segundo
  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1
        } else {
          clearInterval(timer)
          setGameOver(true)
          return 0 // Garante que o tempo não fique negativo
        }
      })
    }, 1000)
  }

  // Verifica se a tecla pressionada é correta
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!gameOver) {
      const keyPressed = event.key.toUpperCase()
      if (keyPressed === sequence[currentKeyIndex]) {
        setCurrentKeyIndex(currentKeyIndex + 1)
        setUserInput(keyPressed)
        if (currentKeyIndex === sequence.length - 1) {
          handleSequenceCompleted()
        }
      } else {
        setGameOver(true)
      }
    }
  }

  // Função para lidar com a conclusão da sequência
  const handleSequenceCompleted = () => {
    alert('Você completou a sequência!')
    setScore((prevScore) => prevScore + 1) // Incrementa a pontuação
    startGame() // Inicia um novo jogo
  }

  // Função para reiniciar o jogo
  const restartGame = () => {
    startGame()
  }

  // Função para iniciar o jogo quando clicar no botão "Iniciar Jogo"
  const handleStartGame = () => {
    startGame()
  }

  useEffect(() => {
    if (gameOver) {
      // Mostrar botão de reiniciar após o jogo acabar
      const restartButton = document.getElementById('restart-button')
      if (restartButton) restartButton.style.display = 'block'
    } else {
      // Esconder botão de reiniciar durante o jogo
      const restartButton = document.getElementById('restart-button')
      if (restartButton) restartButton.style.display = 'none'
    }
  }, [gameOver])

  return (
    <S.Container>
      <S.Card>
        {!gameStarted && ( // Mostra o botão apenas se o jogo não tiver começado
          <>
            <S.Instruction>PRESSIONE AS TECLAS NA ORDEM CORRETA:</S.Instruction>
            <S.Btn onClick={handleStartGame}>INICIAR JOGO</S.Btn>
          </>
        )}
        {gameStarted && (
          <S.Game
            ref={gameContainerRef}
            tabIndex={0}
            onKeyDown={handleKeyPress}
          >
            <S.letters>Sequência: {sequence.join(' | ')}</S.letters>
            <S.Time>
              Tempo restante: {timeRemaining > 0 ? timeRemaining : 0} segundos
            </S.Time>
          </S.Game>
        )}
        <S.BtnReset
          id="restart-button"
          onClick={restartGame}
          style={{ display: 'none' }}
        >
          REINICIAR
        </S.BtnReset>
      </S.Card>
      <S.Points>Pontuação: {score}</S.Points>
      <img src={wallpaper} />
    </S.Container>
  )
}

export default Game

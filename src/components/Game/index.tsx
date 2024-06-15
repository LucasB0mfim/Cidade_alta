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
  const [correctKeys, setCorrectKeys] = useState<boolean[]>([])
  const [failed, setFailed] = useState<boolean>(false) // Estado para controlar se o usuário falhou

  const gameContainerRef = useRef<HTMLDivElement>(null) // Referência para o container do jogo
  const timerRef = useRef<NodeJS.Timeout | null>(null) // Referência para o timer

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
    if (timerRef.current) {
      clearInterval(timerRef.current) // Limpa o timer anterior, se houver
    }
    const newSequence = generateRandomSequence()
    setSequence(newSequence)
    setCurrentKeyIndex(0)
    setUserInput('')
    setGameOver(false)
    setTimeRemaining(5) // Reinicia o tempo para 5 segundos
    setCorrectKeys(new Array(6).fill(false)) // Inicializa o estado das letras corretas
    startTimer() // Inicia o contador regressivo
    setGameStarted(true) // Marca o jogo como iniciado
    setFailed(false) // Resetar o estado de falha
    setTimeout(() => {
      gameContainerRef.current?.focus() // Foca o container do jogo
    }, 0)
  }

  // Inicia o timer com um intervalo de 1 segundo
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1
        } else {
          if (timerRef.current) {
            clearInterval(timerRef.current)
          }
          setGameOver(true)
          setFailed(true) // Marca o jogo como falhado quando o tempo acabar
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
        setCorrectKeys((prevCorrectKeys) => {
          const newCorrectKeys = [...prevCorrectKeys]
          newCorrectKeys[currentKeyIndex] = true
          return newCorrectKeys
        })
        if (currentKeyIndex === sequence.length - 1) {
          handleSequenceCompleted()
        }
      } else {
        setGameOver(true)
        setFailed(true) // Marca o jogo como falhado quando o usuário erra
      }
    }
  }

  // Função para lidar com a conclusão da sequência
  const handleSequenceCompleted = () => {
    // alert('Você completou a sequência!')
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
    return () => {
      // Limpa o timer quando o componente é desmontado
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [gameOver])

  return (
    <S.Container>
      <S.Card>
        {!gameStarted && ( // Mostra o botão apenas se o jogo não tiver começado
          <>
            <S.Instruction>
              PRESSIONE AS TECLAS <br />
              NA ORDEM CORRETA
            </S.Instruction>
            <S.StartGame>
              <S.BtnStart onClick={handleStartGame}>INICIAR JOGO</S.BtnStart>
              <S.Shadow></S.Shadow>
            </S.StartGame>
          </>
        )}
        {gameStarted && (
          <S.Game
            ref={gameContainerRef}
            tabIndex={0}
            onKeyDown={handleKeyPress}
          >
            <S.letters>
              Sequência:{' '}
              {sequence.map((letter, index) => (
                <S.Letter key={index} correct={correctKeys[index]}>
                  {letter}
                </S.Letter>
              ))}
            </S.letters>
            <S.Time>
              Tempo restante: {timeRemaining > 0 ? timeRemaining : 0} segundos
            </S.Time>
          </S.Game>
        )}
        {gameOver && failed && (
          <S.GameOverMessage>Você falhou</S.GameOverMessage>
        )}
        <S.ResetGame>
          <S.BtnReset
            onClick={restartGame}
            style={{ display: gameOver ? 'block' : 'none' }}
          >
            REINICIAR
          </S.BtnReset>
          <S.Shadow style={{ display: gameOver ? 'block' : 'none' }} />
        </S.ResetGame>
      </S.Card>
      <S.Points>Pontuação: {score}</S.Points>
    </S.Container>
  )
}

export default Game

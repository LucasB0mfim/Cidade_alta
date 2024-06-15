import styled, { css } from 'styled-components'
import wallpaper from '../../assets/images/wallpaper.jpg'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Card = styled.div`
  width: 40vw;
  height: 300px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0px 50px #000;
  background: ${colors.yellow};

  @media (min-width: 1600px) {
    height: 400px;
  }
`

export const Shadow = styled.div`
  width: 20.8vw;
  height: 12vh;
  background: ${colors.black};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  border: none;
  border-radius: 10px;
`

export const StartGame = styled.div`
  position: relative;
  width: 20vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1600px) {
    margin-top: 70px;
  }
`

export const BtnStart = styled.button`
  position: absolute;
  top: 4px;
  left: 5.5px;
  color: ${colors.white};
  outline: none;
  width: 20vw;
  height: 10vh;
  font-size: 2.5vw;
  font-weight: 800;
  align-items: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: rgb(204, 204, 204);
  background: linear-gradient(180deg, ${colors.gray} 0%, rgba(0, 0, 0, 1) 100%);
  z-index: 1;
  transition: transform 0.3s ease;
  box-shadow: 0px 2px 2px ${colors.lightGray};

  &:hover {
    transform: translateY(2px);
  }

  @media (min-width: 1600px) {
    left: 8px;
    &:hover {
      transform: translateY(4px);
    }
  }
`

export const BtnReset = styled.button`
  position: absolute;
  top: 4px;
  left: 5.5px;
  color: ${colors.white};
  outline: none;
  width: 20vw;
  height: 10vh;
  font-size: 2.5vw;
  font-weight: 800;
  align-items: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: rgb(204, 204, 204);
  background: linear-gradient(180deg, ${colors.gray} 0%, rgba(0, 0, 0, 1) 100%);
  z-index: 1;
  box-shadow: 0px 2px 2px ${colors.lightGray};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(2px);
  }

  @media (min-width: 1600px) {
    left: 8px;
    &:hover {
      transform: translateY(6px);
    }
  }
`

export const Game = styled.div`
  height: 100%;
  outline: none;
  text-align: center;
`

export const Start = styled.button``

export const Instruction = styled.p`
  text-align: center;
  color: ${colors.black};
  font-size: 3vw;
  font-weight: 600;
  margin-bottom: 15px;
`

export const letters = styled.p`
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5vw;
  margin-bottom: 5px;
  }
`

export const Time = styled.p`
  color: ${colors.black};
  font-size: 2.5vw;
`

export const Points = styled.p`
  font-size: 2vw;
  position: absolute;
  top: 20%;
  text-align: center;
  color: ${colors.white};
  filter: drop-shadow(0px 1px 3px #000);
`

export const Letter = styled.span<{ correct: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  display: inline-block;
  height: 45px;
  width: auto;
  padding: 10px;
  border-radius: 6px;
  background-color: ${colors.beige};
  margin: 10px 5px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.8);
  ${(props) =>
    props.correct &&
    css`
      background-color: ${colors.lightGreen};
      color: ${colors.black};
    `}
`
export const GameOverMessage = styled.span`
  font-size: 3vw;
  background: linear-gradient(to bottom, #ac0202, #460000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`
export const ResetGame = styled.div`
  position: relative;
  width: 20.8vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin: 30px 0 40px 0;

  @media (min-width: 1600px) {
    margin: 30px 0 80px 0;
  }
`

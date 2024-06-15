import styled from 'styled-components'
import wallpaper from '../../assets/images/wallpaper.jpg'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${wallpaper});
  object-fit: cover;
`

export const Card = styled.div`
  width: 40vw;
  height: 300px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 0px 50px #000;
  background: ${colors.yellow};
`

export const Shadow = styled.div`
  width: 20.5vw;
  height: 11.5vh;
  background: ${colors.black};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  border: none;
  border-radius: 5px;
`

export const StartGame = styled.div`
  position: relative;
  width: 20vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BtnStart = styled.button`
  position: absolute;
  top: 3px;
  left: 3px;
  color: ${colors.white};
  outline: none;
  width: 20vw;
  height: 10vh;
  font-size: 2.5vw;
  font-weight: 800;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${colors.gray};
  z-index: 1;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(2px);
  }
`

export const BtnReset = styled.button`
  width: 330px;
  height: 10vh;
  color: ${colors.white};
  font-weight: 800;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${colors.black};
  transition: all linear 0.2s;
  box-shadow: 0px 2px 10px ${colors.black};

  &:hover {
    background: ${colors.gray};
    transition: all linear 0.2s;
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
  font-size: 1.5rem;
  margin-bottom: 5px;
  }
`

export const Time = styled.p`
  color: ${colors.black};
`

export const Points = styled.p`
  font-size: 2vw;
  position: absolute;
  top: 20%;
  text-align: center;
  color: ${colors.white};
  // padding: 10px;
  // background: ${colors.gray};
  // border-radius: 5px;
  filter: drop-shadow(0px 1px 3px #000);
`

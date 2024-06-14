import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  width: 40vw;
  height: 300px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: rgb(255, 192, 70);
  padding: 80px 0;
  border-radius: 5px;
`

export const Btn = styled.button`
  color: #fff;
  width: 20vw;
  height: 10vh;
  font-weight: 800;
  letter-spacing: 2px;
  border: none;
  border-radius: 5px;
  background: #1d1d1d;
  cursor: pointer;
  box-shadow: 0px 2px 10px #000;
  transition: all linear 0.2s;

  &:hover {
    transition: all linear 0.2s;
    background: #2c2c2c;
  }
`

export const BtnReset = styled.button`
  color: #fff;
  width: 20vw;
  height: 10vh;
  font-weight: 800;
  letter-spacing: 2px;
  border: none;
  border-radius: 5px;
  background: #1d1d1d;
  cursor: pointer;
  box-shadow: 0px 2px 10px #000;
  transition: all linear 0.2s;

  &:hover {
    transition: all linear 0.2s;
    background: #2c2c2c;
  }
`

export const Game = styled.div`
  text-align: center;
  outline: none;
  height: 100%;
`

export const Start = styled.button``

export const Instruction = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 15px;
`

export const letters = styled.p`
  color: #000;
  font-size: 1.5rem;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`

export const Time = styled.p`
  color: #000;
`

export const Points = styled.p`
  position: absolute;
  top: 20%;
  right: 10%;
  color: #fff;
`

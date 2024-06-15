import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  background: ${colors.black};

  header {
    max-width: 1240px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    img {
      width: 56px;
      color: ${colors.white};
    }
  }
`

import styled from 'styled-components'

export const Global = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background-color: rgb(47, 51, 79);

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    object-fit: cover;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: end;

  form {
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 12px;
    background: rgb(47, 51, 79);
    z-index: 2;

    div {
      height: 12vh;
      label {
        color: #fff;
      }

      input {
        width: 100%;
        height: 5vh;
        padding-left: 5px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin-top: 0.1vh;

        &.error {
          border: 2px solid red;
        }
      }

      p {
        color: #fff;
        font-size: 14px;
        padding: 5px 0;
      }
    }

    button {
      width: 100%;
      height: 5vh;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: rgb(255, 192, 70);
      font-weight: 800;
      letter-spacing: 2px;
    }
  }
`

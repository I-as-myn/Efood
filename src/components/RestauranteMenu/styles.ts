import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  position: relative;
  width: 320px;
  height: 338px;
  margin-left: 171px;

  img {
    height: 167px;
    width: 304px;
    object-fit: cover;
    display: block;
    margin-top: 8px;
    margin-left: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin: 8px;
`

export const Descricao = styled.p`
  width: 304px;
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-left: 8px;
  font-weight: 400;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled(Link)`
  background-color: ${cores.branca};
  color: ${cores.rosa};
  border: none;
  font-weight: bold;
  font-size: 14px;
  width: 304px;
  height: 24px;
  margin: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`
export const ModalContainer = styled.div`
  background-color: ${cores.rosa};
  width: 1024px;
  height: 344px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-left: 32px;
  }

  .container {
    color: ${cores.branca};
    margin-right: 32px;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 16px;
    }

    .customButton {
      font-size: 14px;
      width: 218px;
      height: 24px;
      margin-left: 0px;
      font-weight: bold;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;

  img {
    width: 16px;
    height: 16px;
  }
`

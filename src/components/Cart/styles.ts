import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../assets/image/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 100%;
  max-width: 360px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    background-color: ${cores.FundoCard};
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  padding: 40px 8px 16px 8px;
  color: ${cores.branca};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.FundoCard};
  position: relative;
  margin: 8px 0px 12px 0px;
  padding: 8px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    color: ${cores.rosa};
    font-weight: bold;
    font-size: 18px;
    padding-left: 8px;
  }

  span {
    display: block;
    color: ${cores.rosa};
    font-size: 14px;
    padding-left: 8px;
    padding-top: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

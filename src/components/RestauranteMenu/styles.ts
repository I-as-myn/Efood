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
  font-size: 14px;
  width: 304px;
  height: 24px;
  margin: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

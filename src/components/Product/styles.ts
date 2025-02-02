import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.FundoCard};
  position: relative;
  border: 1px solid ${cores.rosa};
  width: 472px;
  height: 398px;

  img {
    height: 217px;
    width: 100%;
    object-fit: cover;
    display: block;
  }

  ${TagContainer} {
    height: 26px;
    display: inline;
    margin-left: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin: 8px;
`

export const Descricao = styled.p`
  width: 456px;
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  gap: 5px;
`
export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  border: none;
  font-size: 14px;
  width: 82px;
  height: 24px;
  margin: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

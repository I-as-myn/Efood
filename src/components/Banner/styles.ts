import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div<{ backgroundImage: string }>`
  width: 100%;
  height: 280px;
  background-image: url(${(props) =>
    props.backgroundImage}); /* Usamos a prop aqui */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  * {
    position: relative;
    z-index: 2;
    color: white;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Title = styled.h2`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: bold;
  margin-left: 170px;
  padding-top: 140px;
`
export const Category = styled.h3`
  font-style: italic;
  margin-left: 170px;
  padding-top: 40px;
  font-size: 32px;
  font-weight: 100;
`

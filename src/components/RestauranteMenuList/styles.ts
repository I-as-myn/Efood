import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.branca};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 56px auto 120px auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-template-rows: repeat(2, 338px);
  gap: 32px;
  width: fit-content;
  justify-content: center;
  padding: 0;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

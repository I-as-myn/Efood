import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.branca};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 120px;
  width: 100%;
  max-width: 1366px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  gap: 48px 80px;
`

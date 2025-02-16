import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.branca};
  display: flex;
  flex-drection: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 80px auto 120px auto;
`

export const List = styled.ul`
  width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 472px);
  gap: 48px 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(1, 472px);
    justify-content: center;
  }
`

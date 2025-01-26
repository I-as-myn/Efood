import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 1024px;
  max-width: 100%;
  padding-top: 40px;
  padding-bottom: 120px;
  background-color: ${cores.branca};
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  justify-content: center;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

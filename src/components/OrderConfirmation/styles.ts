import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  dipslay: flex;
  color: ${cores.branca};
  margin-left: 8px;
  margin-right: 8px;

  h2 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 30px;
    text-align: left;
  }

  button {
    background-color: ${cores.branca};
    color: ${cores.rosa};
    border: none;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    height: 24px;
    padding: 4px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
`

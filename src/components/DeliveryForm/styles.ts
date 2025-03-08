import styled from 'styled-components'
import { cores } from '../../styles'

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${cores.branca};
  font-weight: bold;
  margin-left: 8px;
  margin-right: 8px;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    font-size: 14px;
    padding: 8px;
    height: 32px;
    width: 100%;
    border: none;
    background-color: ${cores.branca};

    &.error {
      border: 2px solid red;
    }
  }

  .error-message {
    font-size: 12px;
    color: red;
    margin-top: 4px; // Adicionei um pequeno espaçamento entre o input e a mensagem de erro
  }
`

export const RowGroup = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
`

export const ButtonGroup = styled.div`
  margin-top: 24px;

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

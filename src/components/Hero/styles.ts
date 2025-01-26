import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroBar = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  height: 384px;
  color: ${cores.rosa};
  margin-top: -24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 125px;
    height: 56px;
    margin-top: 40px;
    margin-left: 150px;
  }

  p {
    width: 539px;
    height: 84px;
    margin-top: 148px;
    margin-left: 150px;
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
    text-align: center;
    justify-content: center;
  }
`

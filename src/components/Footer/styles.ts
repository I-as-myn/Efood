import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.footer};
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 125px;
    height: 56px;
    margin-top: 40px;
    margin-bottom: 24px;
    margin-left: 5px;
  }
`
export const SocialMedia = styled.div`
  img {
    height: 24px;
    width: 24px;
    margin: 4px;
  }
`
export const FooterText = styled.p`
  width: 480px;
  height: 24px;
  margin-top: 60px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`

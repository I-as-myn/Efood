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
    margin-left: 150px;
    margin-bottom: 24px;
  }
`
export const SocialMedia = styled.div`
  margin-left: 150px;

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
  margin-left: 150px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`

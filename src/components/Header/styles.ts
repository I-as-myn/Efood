import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  margin: 0 auto;
  height: 186px;
  color: ${cores.rosa};
  margin-top: -24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${cores.rosa};
  }
`

export const Links = styled.ul`
  margin-top: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
`
export const LinkItem = styled.li`
  font-size: 18px;
  margin-left: 170px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: auto;
  }
`
export const CartButton = styled.a`
  display: flex;
  font-size: 18px;
  margin-right: 170px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: auto;
  }
`
export const Logo = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 10px;
  margin: 0 auto;
  margin-left: 150px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: auto;
  }
`

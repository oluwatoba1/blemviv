import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const HeaderGroup = styled.header`

  position: fixed;
  height: 80px;
  width: 100%;
  z-index: 100;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  background-color: #fff;

  @media (max-width: 720px) {
    height: 60px;
  }

  @media (max-width: 640px) {
    height: 60px;
  }

`

const TopHeader = styled.div`

  position: relative;
  width: 100%;

`



const Logo = styled.p`
  
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  font-size: 40px;
  font-weight: 300;

  @media (max-width: 720px) {
    font-size: 26px;
  }

  @media (max-width: 640px) {
    font-size: 24px;
  }

`

const BottomHeader = styled.div`

  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);


  a {
    text-decoration: none;
    margin: 0;
    color: rgba(0, 0, 0, .5);
    padding-right: 60px;
    text-transform: uppercase;
    font-size: 12px;
    transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    :nth-child(4) {
    padding-right: 0;
  }

  @media (max-width: 720px) {
    padding-right: 40px;
    font-size: 8px;
  }

  @media (max-width: 640px) {
    padding-right: 35px;
    font-size: 8px;
  }

  }

  a:hover {
    color: #e7a0df;
  }

  
`

const Header = ({ siteTitle }) => (
  <HeaderGroup>
    <TopHeader>
      <Logo>{siteTitle}</Logo>
    </TopHeader>
    <BottomHeader>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Shop</Link>
      <Link to="/">Contact</Link>
    </BottomHeader>
  </HeaderGroup>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

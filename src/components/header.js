import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled, {css} from 'styled-components'

const HeaderWrapper = styled.div`

  position: relative;
  
  @media (max-width: 720px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
  }

`

const HeaderGroup = styled.header`

  position: fixed;
  height: 90px;
  width: 100%;
  z-index: 100;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  background-color: #fff;

  @media (max-width: 720px) {
    height: 50px;
    grid-template-rows: repeat(1, 1fr);
  }

  @media (max-width: 640px) {
    height: 50px;
    grid-template-rows: repeat(1, 1fr);
  }

`

const TopHeader = styled.div`

  position: relative;
  width: 100%;
  align-items: center;
  justify-items: center;
  


  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: 10% auto;
  }

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 10% auto;
  }


`



const Logo = styled.p`
  
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  font-size: 44px;
  font-weight: 300;

  @media (max-width: 720px) {
    font-size: 28px;
  }

  @media (max-width: 640px) {
    font-size: 26px;
  }

`

const MenuButton = styled.div`

  display: none;
  align-items: center;  

@media (max-width: 720px){
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 4px;

  .bar1, .bar2, .bar3 {
  
    background-color: #333;
    width: 30px;
    height: 4px;
    transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  ${({menuToggled}) => menuToggled && css`
    .bar1.change {
      transform: rotate(-45deg) translate(-8px, 6px);
    }
    .bar2.change {
      opacity: 0;
    }
    .bar3.change {
      transform: rotate(45deg) translate(-8px, -6px);
    }
  `} 
}

`

const MenuList = styled.div`


  @media (max-width: 720px) {

    position: fixed;
    top: 50px;
    left: 0;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    height: 95vh;
    background-color: rgba(12,5,11, .9);
    z-index: 100;
    padding: 20px 0;
    align-items: start;
    justify-items: center;
    animation: slideIn 1s forwards;

    @keyframes slideIn {
      0% {
        transform: translateX(-20%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  a{
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
  }

  a:hover {
    font-size: 28px;
  }

`

const BottomHeader = styled.div`

  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #dadad8;
  background-color: rgba(220, 220, 220, .4);
;


  a {
    text-decoration: none;
    margin: 0;
    color: rgba(0, 0, 0, .7);
    padding-right: 60px;
    text-transform: uppercase;
    font-size: 16px;
    transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    :nth-child(4) {
    padding-right: 0;
  }

  @media (max-width: 720px) {
    display: none;
  }

  @media (max-width: 640px) {
    display: none;
  }

  }

  a:hover {
    color: #e7a0df;
    font-weight: 500;
  }

  
`

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuButtonToggled: false
    }
    
  }

  toggle = () => {
    this.setState({menuButtonToggled: !this.state.menuButtonToggled})
  }
  

  render() {
    const menuChange = this.state.menuButtonToggled ? 'change' : '';
    return (
        <HeaderWrapper>
          <HeaderGroup>
          <TopHeader>
            <MenuButton menuToggled={this.state.menuButtonToggled} onClick={this.toggle}>
              <div className={`bar1 ${menuChange}`}></div>
              <div className={`bar2 ${menuChange}`}></div>
              <div className={`bar3 ${menuChange}`}></div>
            </MenuButton>
            <Logo>Blemiviv skin care</Logo>
          </TopHeader>
          <BottomHeader>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Contact</Link>
          </BottomHeader>
        </HeaderGroup>
        {this.state.menuButtonToggled && (
          <MenuList>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Contact</Link>
        </MenuList>
        )}
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

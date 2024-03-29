import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import {HeaderWrapper, HeaderGroup, TopHeader, BottomHeader, MenuButton, MenuList, Logo, SocialMedia} from './component'

import ig from '../../images/instagram.png'
import fb from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import yt from '../../images/youtube.png'



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
    // if(this.state.menuButtonToggled === false) {
    //   const animation = `slideBack 1s forward`;
    //   this.refs.id.style.animation = animation;
    // }
    return (
        <HeaderWrapper>
          <HeaderGroup>
          <TopHeader>
            <Logo>Blemiviv Koncept</Logo>
            <MenuButton menuToggled={this.state.menuButtonToggled} onClick={this.toggle}>
              <div className={`bar1 ${menuChange}`}></div>
              <div className={`bar2 ${menuChange}`}></div>
              <div className={`bar3 ${menuChange}`}></div>
            </MenuButton>
          </TopHeader>
          <BottomHeader>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
          </BottomHeader>
        </HeaderGroup>
        {/* {this.state.menuButtonToggled && ( */}
          <MenuList id="menuList" ref="menuList" view={this.state.menuButtonToggled}>
            <Link to="/">Home</Link>
            <Link to="/">About us</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/">Kids</Link>
            <Link to="/">Contact us</Link>
            <SocialMedia>
              <img src={ig} />
              <img src={twitter} />
              <img src={fb} />
              <img src={yt} />
            </SocialMedia>
        </MenuList>
        {/* )} */}
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

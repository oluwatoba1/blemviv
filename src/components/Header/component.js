import styled, {css} from 'styled-components'


export const HeaderWrapper = styled.div`

  position: relative;

`

export const HeaderGroup = styled.header`

  position: fixed;
  width: 100%;
  z-index: 100;
  display: block;
  background-color: #fff;

`

export const TopHeader = styled.div`

  position: relative;
  width: 100%;
  align-items: center;
  justify-items: center;
  


  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: auto 10%;
  }

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: auto 10%;
  }


`



export const Logo = styled.p`
  
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  text-justify: center;

  @media (max-width: 720px) {
    font-size: 28px;
  }

  @media (max-width: 640px) {
    font-size: 26px;
  }

`

export const MenuButton = styled.div`

  display: none;
  align-items: center; 

@media (max-width: 720px){
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 4px;

  .bar1, .bar2, .bar3 {
  
    background-color: #333;
    width: 20px;
    height: 3px;
    transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  ${({menuToggled}) => menuToggled && css`
    .bar1.change {
      transform: rotate(-45deg) translate(-6px, 6px);
    }
    .bar2.change {
      opacity: 0;
    }
    .bar3.change {
      transform: rotate(45deg) translate(-4px, -4px);
    }
  `} 
}

`

export const MenuList = styled.div`

  display: none;

  @media (max-width: 720px) {

    position: fixed;
    top: 40px;
    left: 0;
    display: grid;
    grid-template-rows: repeat(6, 15vh);
    width: 100%;
    height: 95vh;
    background-color: rgba(255, 255, 255, .9);
    z-index: 100;
    padding: 20px 40px;
    align-items: start;
    justify-items: start;
    transition: all 0.5s ease-out;
    transform: ${props=> props.view ? 'translateX(0)' : 'translateX(100%)'};
    /* animation: slideIn 1s forwards;

    @keyframes slideIn {
      0% {
        transform: translateX(120%);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes slideBack {
      0% {
        transform: translateX(0);
        opacity: 1;

      }
      100% {
        transform: translateX(120%);
        opacity: 0;

      }
    } */
  }

  a{
    color: #333;
    text-decoration: none;
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 700;
    border-bottom: 2px solid #333;
  }

  a:hover {
    font-size: 34px;
  }

`

export const SocialMedia = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  align-self: center;
  overflow: hidden;

  img { 
    height: 40px;
  } 

`

export const BottomHeader = styled.div`

  display: flex;
  height: 26px;
  width: 100%;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border: 1px solid #974e4e;
  background-color: rgba(220, 220, 220, .4);

  @media (max-width: 720px) {
    display: none;
  }

  @media (max-width: 640px) {
    display: none;
  }
;


  a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .7);
    padding-right: 60px;
    text-transform: uppercase;
    text-align: center;
    font-size: 14px;
    transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    :nth-child(4) {
    padding-right: 0;
  }

  

  }

  a:hover {
    color: #e7a0df;
    font-weight: 500;
  }

  
`


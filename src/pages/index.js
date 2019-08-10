import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import blemviv1 from '../images/blemviv1.jpg'
import blemvivscroll2 from '../images/blemviv-scroll2.jpg';

const Wrapper = styled.div`
position: relative;
`

const MainImage = styled.div`
  background: url(${props => props.image});
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: 720px) {
    height: 400px;
  }

  @media (max-width: 640px) {
    height: 380px;
  }
 
`

const CellGroup = styled.div`

  position: relative;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-top: 20px;
  grid-gap: 30px;
  overflow-x: scroll;
  border: 1px solid rgba(0, 0, 0, 0.3);
  -webkit-overflow-scrolling: touch;

`

const Cell = styled.img`

  height: 200px;
  padding: 30px 0;
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 720px) {
    height: 100px;
    padding: 25px 0;
  }

  @media (max-width: 640px) {
    height: 100px;
    padding: 20px 0;
  }

`

const IndexPage = () => (
  <Layout>
    <Wrapper>
    <SEO title="Home" />
    <MainImage image={blemviv1}></MainImage>
    <CellGroup>

      <Cell src={blemvivscroll2}/>
      <Cell src={blemvivscroll2}/>
      <Cell src={blemvivscroll2}/>
      <Cell src={blemvivscroll2}/>
      <Cell src={blemvivscroll2}/>
      <Cell src={blemvivscroll2}/>
      <Cell src={blemvivscroll2}/>
      <Cell src={blemvivscroll2}/>

    </CellGroup>
    <ul>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
      <li>were</li>
    </ul>    
    </Wrapper>
  </Layout>
)

export default IndexPage

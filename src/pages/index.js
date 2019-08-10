import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import blemviv1 from '../images/blemviv1.jpg'

const Wrapper = styled.div`
position: relative;
`

const MainImage = styled.div`
  background: url(${props => props.image});
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-top: 100px;
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: 720px) {
    height: 400px;
    padding-top: 60px;
  }

  @media (max-width: 640px) {
    height: 350px;
    padding-top: 60px;
  }
 
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
    <SEO title="Home" />
    <MainImage image={blemviv1}></MainImage>
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

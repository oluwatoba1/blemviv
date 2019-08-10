import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import constrodekorpools from '../images/constrodekorpools.jpg'

const Wrapper = styled.div`
position: relative;
`

const SomePic = styled.div`
  background: url(${props => props.image});
  height: 400px;
  background-position: center;
  padding-top: 100px;
 
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
    <SEO title="Home" />
    <SomePic image={constrodekorpools}></SomePic>
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

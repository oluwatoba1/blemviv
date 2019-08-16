import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import blemviv1 from '../images/blemiviv.jpg'
import blemvivscroll2 from '../images/blemviv-scroll2.jpg';
import manicure from '../images/manicure-pedicure.jpg'
import hairstyling from '../images/hairstyling.jpg'
import makeup from '../images/makeup2.jpg'
import bodyspa from '../images/bodyspa.jpg'

const Wrapper = styled.div`
position: relative;
`

const MainImage = styled.div`
  background: url(${props => props.image});
  height: 700px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: 720px) {
    height: 400px;
  }

  @media (max-width: 640px) {
    height: 370px;
  }
 
`

const CellGroup = styled.div`

  position: relative;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-top: 20px;
  grid-gap: 30px;
  overflow-x: scroll;
  border: 1px solid #974e4e;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;

  }

`

const Cell = styled.img`

  height: 200px;
  padding: 30px 0;
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0.8;
  cursor

  &:hover {
    transform: scale(1.1);
    opacity: 1;
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

const ExploreGroup = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px 250px;



`

const Left = styled.div`
  height: 100vh;
  padding: 20px;
`
const Right = Left

const ExploreHeading = styled.h4`

  font-size: 20px;
  text-transform: uppercase;
  color: #974e4e;
  font-weight: 700;
  margin: 0;

`

const ExploreTitle = styled.h3`
  
  font-size: 24px;
  color: #333;

`

const ExploreBody = styled.p`
  font-size: 20px;
  color: rgba(0, 0, 0, .8);
`

const ExploreCellWrapper = styled.div`

  position: relative;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;

`

const ExploreCellGroup = styled.div`

  padding: 25px;
  border: 1px solid #974e4e;
  margin-bottom: 20px;

`

const ExploreCell = styled.div`

  background: url(${props => props.image});
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  
`

const ExploreCellCaption = styled.span`
  width: 60%;
  height: 80px;
  font-size: 24px;
  text-transform: uppercase;
  padding: 10px;
  color: #fff;
  background-color: #333;
  text-justify: end;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
    <SEO title="Home" />
    <MainImage image={blemviv1} />
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
    <ExploreGroup>
      <Left>
        <ExploreHeading>explore our services</ExploreHeading>
        <ExploreTitle>The beauty is not luxurious imagination</ExploreTitle>
        <ExploreBody>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</ExploreBody>
        <ExploreCellWrapper>
          <ExploreCellGroup>
            <ExploreCell image={manicure} />
            <ExploreCellCaption>Manicure & Pedicure</ExploreCellCaption>
          </ExploreCellGroup>
          <ExploreCellGroup>
            <ExploreCell image={hairstyling} />
            <ExploreCellCaption>Hair Styling</ExploreCellCaption>
          </ExploreCellGroup>
        </ExploreCellWrapper>
      </Left>
      <Right>
      <ExploreCellWrapper>
          <ExploreCellGroup>
            <ExploreCell image={makeup} />
            <ExploreCellCaption>Professsional Makeup</ExploreCellCaption>
          </ExploreCellGroup>
          <ExploreCellGroup>
            <ExploreCell image={bodyspa} />
            <ExploreCellCaption>Body Spa</ExploreCellCaption>
          </ExploreCellGroup>
        </ExploreCellWrapper>
      </Right>
    </ExploreGroup>    
    </Wrapper>
  </Layout>
)

export default IndexPage

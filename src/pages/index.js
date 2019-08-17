import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import blemviv1 from '../images/blemiviv.jpg'
import blemvivscroll2 from '../images/blemviv-scroll2.jpg';
import manicure from '../images/manicure-pedicure.jpg'
import bodywax from '../images/bodywax.jpg'
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
  grid-template-columns: repeat(8, 250px);
  margin-top: 20px;
  padding: 20px;
  grid-gap: 30px;
  overflow-x: scroll;
  border: 1px solid #974e4e;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;

  }

`

const Cell = styled.div`

  background: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  padding: 30px 0;
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 720px) {
    height: 150px;
    padding: 25px 0;
    
  }

  @media (max-width: 640px) {
    height: 100px;
    padding: 20px 0;
    opacity: 1;
  }

`

const ExploreGroup = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 50px 100px;
  border: 1px solid #974e4e;
  align-items: center;
  justify-content: center;
  grid-template-rows: auto auto;

  @media (max-width: 720px) {
    padding: 50px 50px;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }


`

const Left = styled.div`
  position: relative;
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
  grid-row-gap: 20px;

`

const ExploreCellGroup = styled.div`

  padding: 20px;
  border: 1px solid #974e4e;
  position: relative;
  overflow: hidden;

`

const ExploreCell = styled.div`

  background-image: url(${props => props.image});
  height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background-image: linear-gradient(rgba(151, 78, 78, .4), rgba(151, 78, 78, .4)), url(${props => props.image});
  }

  @media (max-width: 720px) {

    height: 280px;
    
  }
  
`

const ExploreCellCaption = styled.span`
  width: 100px;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  background-color: #333;
  text-align: center;

  @media (max-width: 720px) {

    font-size: 15px;
    padding: 5px;
    
  }

`

const QuoteGroup = styled.div`

  position: relative;
  padding: 35px 70px;

  @media (max-width: 720px) {
    padding: 15px;
  }

`

const Quote = styled.div`

  background-color: #974e4e;
  padding: 60px;
  height: 500px;
  width: 600px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;

  h4 {
    color: #fff;
    font-size: 28px;
    text-transform: capitalize;
    margin: 50px 0 0 0;
  }

  @media (max-width: 720px) {
    padding: 15px;
    height: 550px;
    width: 240px;

  h4 {
    font-size: 24px;
    margin: 0;
  }
  
}

`

const Form = styled.form`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 25px 0; 

  input, textarea {
    border: none;
    border-bottom: 2px solid #808080;
    background-color: #974e4e;
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
    outline: none;

    ::placeholder {
      color: #fff;
    }
  }

  input {
    height: 25px;
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
    margin: 40px 0;

    input, textarea {
    margin-bottom: 30px;
    }

    textarea {
      margin-bottom: 0;
    }
  }

`
const Name = styled.input`
  
`

const PhoneNumber = styled.input`


`

const Email = styled.input`


`

const Subject = styled.input`

  

`

const Message = styled.textarea`

  

`

const SubmitButton = styled.button`

  height: 40px;
  align-self: flex-end;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  background: #fff;
  cursor: pointer;
  color: #333;
  margin-bottom: 20px;

  &:hover {
    background: #974e4e;
    border: 1px solid #fff;
    color: #fff;
  }

`

const IndexPage = () => (
  <Layout>
    <Wrapper>
    <SEO title="Home" />
    <MainImage image={blemviv1} />
    <CellGroup>

      <Cell image={blemvivscroll2}/>
      <Cell image={blemvivscroll2}/>
      <Cell image={blemvivscroll2}/>
      <Cell image={blemvivscroll2}/>
      <Cell image={blemvivscroll2}/>
      <Cell image={blemvivscroll2}/>
      <Cell image={blemvivscroll2}/>
      <Cell image={blemvivscroll2}/>

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
            <ExploreCell image={bodywax} />
            <ExploreCellCaption>Body Waxing</ExploreCellCaption>
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

    <QuoteGroup>
      <Quote>
        <h4>Request a quote</h4>
        <Form>
          <Name placeholder="Name*" />
          <PhoneNumber placeholder="Phone number*" />
          <Email placeholder="Email*" />
          <Subject placeholder="Subject*" />
          <Message rows="10" placeholder="Message*" />
          <SubmitButton>Send Message</SubmitButton>
        </Form>
      </Quote>
    </QuoteGroup>

    </Wrapper>
  </Layout>
)

export default IndexPage

import React, { Component } from 'react';
// import Layout from '../components/layout';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`

    position: relative;
    height: 100vh;
    width: 100vw;


`
const Div = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

const Top = styled.div`
    display: block;
    height: 65vh;


`

const BigText = styled.h1`
    margin: 0;
    font-size: 100px;
    padding: 20px;
    align-self: start;

    @media (max-width: 640px) {
        font-size: 60px;
    }
`

const SmallText = styled.h5`
    margin: 0;
    font-size: 16px;
    text-decoration: underline;
    padding: 0 20px;
    align-self: end;

    @media (max-width: 640px) {
        font-size: 10px;
    }
`

const Bottom = styled.div`
    height: 35vh;
    background: linear-gradient(90deg, rgb(110,50,2) 0%, rgba(134,70,13) 30%);
    border-bottom: 1px solid #000;

    p{
        margin: 0;
        font-size: 20px;
        color: #fff;
        animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        @keyframes slideUp {
            0%{
                transform: translateY(20px);
            }
            100%{
                transform: translateY(0);
            }
        }

    }
`

const ProductGroup = styled.div`

    
    width: 100vw;
    height: 100vh;
    animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        @keyframes slideUp {
            0%{
                transform: translateY(20px);
            }
            100%{
                transform: translateY(0);
            }
        }
    

    p{
        margin: 0;
        padding: 20px;
        font-size: 20px;
        color: #fff;
        animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        @keyframes slideUp {
            0%{
                transform: translateY(20px);
            }
            100%{
                transform: translateY(0);
            }
        }

    }

`

const OneHalf = styled.div`
    
    height: 50vh;
    animation: fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    
         
            background: ${({background}) => background};


    @keyframes fadeIn {
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }

    p{
        margin: 0;
        padding: 20px;
        font-size: 20px;
        color: #fff;
        animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        @keyframes slideUp {
            0%{
                transform: translateY(20px);
            }
            100%{
                transform: translateY(0);
            }
        }

    }

`

const OtherHalf = styled.div`

    height: 50vh;
    
`

class Shop extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            scrollHeight: 0,
            listNumber: 1
        }
    }

    componentDidMount() {
            document.addEventListener('touchstart', this.handleTouchStart)
            document.addEventListener('touchmove', this.handleScroll)
    }

    handleTouchStart = (event) => {
        const scrollHeight = event.touches[0].clientY
        this.setState({scrollHeight})
    }

    handleScroll = (event) => {
        const scrollHeight = event.touches[0].clientY;

        const yDiff = this.state.scrollHeight - scrollHeight

                if (yDiff > 0){
                    while(this.state.listNumber < 4){
                        this.setState({
                            scrollHeight,
                            listNumber: this.state.listNumber + 1
                        });
                    }
                }
                else{
                    while(this.state.listNumber > 0){
                        this.setState({
                            scrollHeight,
                            listNumber: this.state.listNumber - 1
                        });
                    }
            }
    
        console.log(this.state.listNumber)
        
    }

    

    render() {
        const Pages =
            {
                items: [
                        {
                            id: 1,
                            background: 'linear-gradient(90deg, rgb(110,50,2) 0%, rgb(134,70,13) 30%)'
                        },
                        {
                            id: 2,
                            background: 'linear-gradient(90deg, rgb(110,50,2) 0%, rgb(134,70,13) 30%)'
                        },
                        {
                            id: 3,
                            background: 'linear-gradient(90deg, rgb(110,50,2) 0%, rgb(134,70,13) 30%)'
                        },
                        {
                            id: 4,
                            background: 'linear-gradient(90deg, rgb(86,189,18) 0%, rgb(58,129,10) 30%)'
                        }
                    ]
        
            };
        return (
            <Wrapper>
                {this.state.listNumber === 0 &&
                    <Div id={this.state.listNumber}>
                    <Top>
                    <BigText>ALL NATURAL CHOCOLATE BARS</BigText>
                    <SmallText>ALL NATURAL CHOCOLATE BARS</SmallText>
                </Top>
                <Bottom>
                <p>SOME TEXT</p>
                </Bottom>
                    </Div>
                }    
                

                {Pages.items.map((item) =>
                    this.state.listNumber === item.id &&

                        <ProductGroup key={item.id}>
                            <OneHalf background={item.background}><p>SOME TEXT</p></OneHalf>
                            <OtherHalf></OtherHalf>
                        </ProductGroup>

                )}

                {/* {this.state.listNumber === 2 &&
                    <ProductGroup>
                    <p>SOME TEXT 2</p>
                    </ProductGroup>
                }
                {this.state.listNumber === 3 &&
                    <ProductGroup>
                    <p>SOME TEXT 3</p>
                    </ProductGroup>
                }
                {this.state.listNumber === 4 &&

                    <ProductGroup>
                        <OneHalf background={this.state.listNumber}><p>SOME TEXT 4</p></OneHalf>
                        <OtherHalf></OtherHalf>
                    </ProductGroup>} */}
                
            
            </Wrapper>
        );
    }
}

export default Shop;

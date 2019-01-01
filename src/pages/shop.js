import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`

    position: relative;
    height: 100vh;
    scroll-behavior: smooth;


    button {
        position: fixed;
        top: 50%;
        right: 0;
        z-index: 20;
        transform: rotate(90deg);
    }


`
const Div = styled.div`

    position: relative;
    height: 100vh;
    width: 100vw;

`

const Top = styled.div`
    position: relative;
    height: 65vh;

`

const BigText = styled.h1`
    margin: 0;
    font-size: 100px;
    padding: 20px;

    @media (max-width: 640px) {
        font-size: 60px;
    }
`

const SmallText = styled.h5`
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



const ProductWrapperOne = styled.div`

    ${({scrollHeight}) => scrollHeight < 400 & scrollHeight > 30 && css`
        
        transition: .8s ease-in-out cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation: slideUp .8s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94); 
    `}

    z-index: 10;
    width: 100vw;
    height: 100vh;
       

        @keyframes slideUp {
            0%{
                transform: translateY(30px);
            }
            100%{
                transform: translateY(0);
            }
        }

        .brown{
            height: 50vh;
            z-index: 10;

            background: linear-gradient(90deg, rgb(110,50,2) 0%, rgb(134,70,13) 55%);
            animation: slideUp .8s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);

            @keyframes slideUp {
                0%{
                    transform: translateY(30px);
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
                animation: slideUp .8s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);

                @keyframes slideUp {
                    0%{
                        transform: translateY(30px);
                        opacity: 0;
                    }
                    100%{
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

            }
        }

        .half{
            height: 50vh;
            background: #fff;
            z-index: 10;
        }
    

`


class Shop extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
           
            scrolled: false,
            scrollState: 0,
            scrollHeight: null
        };

        this.landing = React.createRef();
        this.productOne = React.createRef();
        this.productTwo = React.createRef();
    }

    componentDidMount() {
            window.addEventListener('scroll', this.handleTouchStart);            
    }

    handleTouchStart = () => {

        const scrollHeight = window.pageYOffset;
        console.log(scrollHeight);

        this.setState({scrollHeight});
        
        if(scrollHeight < 400 & scrollHeight > 395) {
            window.scrollTo(0, this.productOne.current.offsetTop)
        }
        
    }

    

    render() {
        // let Pages =
        //     [
        //         {
        //             tag: 'a',
        //             _id: 1,
        //             background: 'linear-gradient(90deg, rgb(110,50,2) 0%, rgb(134,70,13) 55%)'
        //         },
        //         {
        //             tag: 'b',
        //             _id: 2,
        //             background: 'linear-gradient(90deg, rgb(116,131,10) 0%, rgb(153,125,12) 55%)'
        //         },
        //         {
        //             tag: 'c',
        //             _id: 3,
        //             background: 'linear-gradient(90deg, rgb(10,131,126) 0%, rgb(16,199,192) 55%)'
        //         },
        //         {
        //             tag: 'd',
        //             _id: 4,
        //             background: 'linear-gradient(90deg, rgb(11,58,141) 0%, rgb(16,82,199) 55%)'
        //         }
        
        //     ];
        return (
            <Wrapper>

                <Div>
                    <Top>
                        <BigText>ALL NATURAL CHOCOLATE BARS</BigText>
                        <SmallText>ALL NATURAL CHOCOLATE BARS</SmallText>
                    </Top>
                    <Bottom>
                        <p>SOME TEXT</p>
                    </Bottom>
                </Div>

                {/* <button disabled={this.state.scrollState === 4 ? true: false} onClick={() => this.handleScroll(this.productRef)}>SOME TEXT</button> */}

                
                <ProductWrapperOne scrollHeight={this.state.scrollHeight} ref={this.productOne}>
                    <div className="brown"><p>Will you please work!!!</p></div>
                    <div className="half"></div>
                </ProductWrapperOne>                

            </Wrapper>
        );
    }
}

export default Shop;

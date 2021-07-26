import styled, { css } from 'styled-components';

export const Content = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    @media only screen and (min-width: 960px){
    }
`
export const Button = styled.button`
    margin: 0 0 0 30px;
    position: relative;
    cursor: pointer;
    z-index: 999;
    background-color:  transparent;
    ${ props => props.space &&css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0;
        & > span {
            font-family: PFont-Light;
            font-size: 14px;
            color: ${ ({ theme }) => `${ theme.PColor }` };
        }
    ` }
    @media only screen and (min-width: 960px){
    }
`
export const FloatingBox = styled.div`
    position: absolute;
    width: 100%;
    border-radius: 10px;
    top: 45px;
    right: 345px;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 30%);
    border-radius: 5px;
    transition: all 0.2s ease;
    background-color: ${ ({ theme })=>(theme.InvTColor) };
    padding: 10px;
    box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
    cursor: pointer;
    
  ${ ({ show }) => show
        ? css`
                  visibility: visible;
                  opacity: 1;
                  transform: translateY(0);
              `
        : css`
                
                  margin: 0;
                  visibility: hidden;
                  opacity: 0;
                  transform: translateY(4px);
              ` }
    @media only screen and (min-width: 960px){
    }
`
export const FloatingBoxTwo = styled(FloatingBox)`
    margin: 0 0 0 30px;
    left: -240px;
    overflow: hidden;
    @media only screen and (min-width: 960px){
    }
  
`
export const Overline = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100vh;
    width: 100%;
    background-color: transparent;
    ${ props => props.show ? css`display: block` : css`display: none;` };
    @media only screen and (min-width: 960px){
    }
  
`
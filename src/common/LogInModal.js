/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width:100%;
    position: fixed;
    z-index: 30;
    font-size: 50px;
`

const BG = css`
    width:100%;
    height:100vh;
    background:rgba(0, 0, 0, 0.3);
`

const Modal = css`
    width: 30%;
    height: 50%;
    background: white;
    position: fixed;
    left: 35%;
    top: 25%;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
`
const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`

const Header = css`
    height: 40px;
    text-align: center;
    line-height: 40px;
`

const CloseButton = css`
`

const Content = css`
`

const Footer = css`
`

function LogInModal({setAuth, logInModal, setLogInModal}){
    return(
        <div css={ComponentLayOut}>
        {logInModal ?
          (
            <div css={BG} onClick={()=>{setLogInModal(false);}}>
                <div css={Modal}>
                    <div css={Header}>
                        LOG IN
                        <div css={CloseButton}></div>
                    </div>
                    <div css={HLineBold}/>
                    <div css={Content}>hi</div>
                    <div css={Footer}></div>
                    <button onClick={()=>{setAuth(true);}}>LOG IN TEST</button>
                </div>
            </div>
          )
        : null}
        </div>
    )
}

export default LogInModal;
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';
import LogIn from './LogIn';

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

const ModalInner = css`
    z-index: 25;
    width: 25%;
    background: white;
    position: fixed;
    left: 37.5%;
    top: 20%;
    padding: 10px;
    font-size: 18px;
`

function Modal({setAuth, logInModal, setLogInModal}){
    const ModalBG = useRef();
    return(
        <div css={ComponentLayOut}>
        {logInModal ?
          (
            <div css={BG} ref={ModalBG} onClick={(e)=>{
                if(ModalBG.current === e.target){
                    setLogInModal(false);
                }
            }}>
                <div css={ModalInner}>
                    <LogIn setAuth={setAuth} setLogInModal={setLogInModal}/>
                </div>
            </div>
          )
        :
            null
        }
        </div>
    )
}

export default Modal;
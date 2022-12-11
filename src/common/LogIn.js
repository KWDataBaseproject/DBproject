/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useState } from 'react';
import jwt_decode from "jwt-decode";

const ComponentLayOut = css`
    margin-left: 40px;
    margin-right: 40px;
`

const Header = css`
    color: #ff8906;
    height: 40px;
    text-align: center;
    font-size: 55px;
    font-weight: bold;
    line-height: 40px;
    margin: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
`

const CloseButton = css`
`

const Content = css`
    display: flex;
    flex-direction: column;
`

const InputBox = css`
    width: 70%;
    border: solid 1px #a7a9be;
`

const InputLine = css`
    margin-top: 20px;
    display:flex;
    justify-content:space-between;
`

const InputTitle = css`
    width: 30%;
`

const OptionLine = css`
    display:flex;
    justify-content:space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Options = css`
    font-size: 13px;
    color: grey;
    cursor: pointer;
    &:hover{
        color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const Footer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 40px;
`

const LogInButton = css`
    width: 100%;
    text-align: center;
    color: black;
    background: #ff8906;
    cursor: pointer;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
`
const ErrorText = css`
    color: red;
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
`

function LogIn({ setToken, setModalContent, setAuth, setLogInModal }){
    const [inputID, setInputID] = useState("");
    const [inputPW, setInputPW] = useState("");
    const [errorText, setErrorText] = useState("");

    const onChangeID = (e) => {
        setInputID(e.target.value);
    }
    const onChangePW = (e) => {
        setInputPW(e.target.value);
    }
    const login = () => {
        axios.post('https://db2.ccppoo.net/auth/login/token',
            {
                username : inputID,
                password : inputPW,
            },
            {
                    headers:{
                        'Content-type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    }
            }
        )
        .then(
            (res)=>{
                setToken(res.data.access_token);
                if(jwt_decode(res.data.access_token).admin){
                    setAuth(2);
                }else{
                    setAuth(1);
                }
                setLogInModal(false);
            }
        )
        .catch((err)=>{
            console.log(err.response.data.detail);
            setErrorText("아이디와 비밀번호를 확인하세요.");
        })
    }
    return(
        <div css={ComponentLayOut}>
            <div css={Header}>
                LOGO
                <div css={CloseButton}></div>
            </div>
            <div css={Content}>
                <div css={InputLine}>
                    <div css={InputTitle}>ID</div>
                    <input onChange={onChangeID} css={InputBox} type="text" placeholder="아이디"/>
                </div>
                <div css={InputLine}>
                    <div css={InputTitle}>비밀번호</div>
                    <input onChange={onChangePW} css={InputBox} type="password" placeholder="비밀번호"/>
                </div>
                <div css={OptionLine}>
                    <div css={Options} onClick={()=>{setModalContent(1);}}>회원가입</div>
                    <div css={Options}>아이디/비밀번호 찾기</div>
                </div>
            </div>
            <div css={Footer}>
                <div css={ErrorText}>{errorText}</div>
                <div css={LogInButton} onClick={()=>{login();}}>
                    LOG IN
                </div>
            </div>
        </div>
    )
}

export default LogIn;
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useState } from 'react';

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

const CancelButton = css`
    width: 100%;
    text-align: center;
    background: white;
    cursor: pointer;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    border: solid 1px black;
`
const ErrorText = css`
    color: red;
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
`

function Register({ setModalContent, setAuth, setLogInModal }){
    const [inputID, setInputID] = useState("");
    const [inputPW, setInputPW] = useState("");
    const [inputFName, setInputFName] = useState("");
    const [inputLName, setInputLName] = useState("");
    const [inputNickName, setInputNickName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputBD, setInputBD] = useState("");
    const [errorText, setErrorText] = useState("");

    const onChangeID = (e) => {
        setInputID(e.target.value);
    }
    const onChangePW = (e) => {
        setInputPW(e.target.value);
    }
    const onChangeFName = (e) => {
        setInputFName(e.target.value);
    }
    const onChangeLName = (e) => {
        setInputLName(e.target.value);
    }
    const onChangeNickName = (e) => {
        setInputNickName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    }
    const onChangeBD = (e) => {
        setInputBD(e.target.value);
    }

    const regist = () => {
        axios.post('https://db2.ccppoo.net/auth/register',
            {
                username : inputID,
                user_nickname : inputNickName,
                hased_pw : inputPW,
                name : {
                    first : inputFName,
                    last : inputLName
                },
                email : inputEmail,
                birthday : inputBD
            },
            {
                    headers:{
                        'Content-type': 'application/json',
                        'Accept': 'application/json'
                    }
            }
        )
        .then(
            (res)=>{
            console.log(res);
            setModalContent(0);
            }
        )
        .catch((err)=>{
            console.log(err);
            setErrorText("회원가입 정보를 확인해주세요.");
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
                <div css={InputLine}>
                    <div css={InputTitle}>성</div>
                    <input onChange={onChangeLName} css={InputBox} type="text" placeholder="성"/>
                </div>
                <div css={InputLine}>
                    <div css={InputTitle}>이름</div>
                    <input onChange={onChangeFName} css={InputBox} type="text" placeholder="이름"/>
                </div>
                <div css={InputLine}>
                    <div css={InputTitle}>별명</div>
                    <input onChange={onChangeNickName} css={InputBox} type="text" placeholder="별명"/>
                </div>
                <div css={InputLine}>
                    <div css={InputTitle}>이메일</div>
                    <input onChange={onChangeEmail} css={InputBox} type="email" placeholder="이메일" required/>
                </div>
                <div css={InputLine}>
                    <div css={InputTitle}>생일</div>
                    <input onChange={onChangeBD} css={InputBox} type="date" placeholder="생일"/>
                </div>
            </div>
            <div css={Footer}>
                <div css={ErrorText}>{errorText}</div>
                <div css={LogInButton} onClick={()=>{regist();}}>
                    REGISTER
                </div>
                <div css={CancelButton} onClick={()=>{setModalContent(0);}}>
                    CANCEL
                </div>
            </div>
        </div>
    )
}

export default Register;
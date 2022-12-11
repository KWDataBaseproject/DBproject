/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import MyTapBar from './MyTapBar';
import MyDetail from './MyDetail';
import MyUserInform from './MyUserInform';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const PageRender = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const PageLayOut = css`
    position: fixed;
    width: 60%;
    height: 88vh;
    animation: ${PageRender} 1s;
    display: flex;
    flex-direction: column;
`

const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`

const MyPageUserInform = css`
    width = 100%;
    padding-top: 13px;
    padding-bottom: 5px;
`

const MyPageTap = css`
    width: 100%;
    display: flex;

`

const MyPageDetail = css`
    width: 100%;
    display: flex;
`
const LogOutButtonLine = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
`
const LogOutButton = css`
    height: 25px;
    width: 100px;
    font-size: 15px;
    margin-bottom: 5px;
    margin-right: 5px;
    line-height: 25px;
    text-align: center;
    border: 1px solid grey;
    cursor: pointer;
    color: grey;
    &:hover{
        color: black;
        border: 1px solid black;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

function MyPage({token, auth, setAuth}){
    const [tapIndex, setTapIndex] = useState(0);
    return(
        <div css={PageLayOut}>
                <div css={LogOutButtonLine}>
                    <NavLink to ="/"
                    style={{ textDecoration: 'none' }}
                    css={LogOutButton}
                    onClick={()=>{setAuth(0);}}>
                            로그아웃
                    </NavLink>
                </div>
                <div css={HLineBold}/>
                <div css={MyPageUserInform}>
                    <MyUserInform token={token}/>
                </div>
                <div css={HLineBold}/>
                <div css={MyPageTap}>
                    <MyTapBar auth={auth} tapIndex={tapIndex} setTapIndex={setTapIndex}/>
                </div>
                <div css={MyPageDetail}>
                    <MyDetail token={token} tapIndex={tapIndex} auth={auth}/>
            </div>
        </div>
    );
}

export default MyPage;
/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import MyTapBar from './MyTapBar';
import MyDetail from './MyDetail';
import MyUserInform from './MyUserInform';
import { useState } from 'react';

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
    margin-top: 15px;
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

const TestButton = css`
    position: fixed;
    left: 85%;
    top: 8%;
`

function MyPage(setAuth){
    const [tapIndex, setTapIndex] = useState(0);
    return(
        <div css={PageLayOut}>
            <div css={MyPageUserInform}>
            <div css={HLineBold}/>
                <MyUserInform/>
            </div>
            <div css={HLineBold}/>
            <div css={MyPageTap}>
                <MyTapBar tapIndex={tapIndex} setTapIndex={setTapIndex}/>
            </div>
            <div css={MyPageDetail}>
                <MyDetail tapIndex={tapIndex}/>
            </div>
            <NavLink to ="/" onClick={()=>{setAuth(false);}}><button css={TestButton}>LOG OUT TEST</button></NavLink>
        </div>
    );
}

export default MyPage;
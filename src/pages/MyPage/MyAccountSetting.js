/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const PageRender = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const ComponentLayOut = css`
    width: 100%;
    display: flex;
    justify-content:center;
    animation: ${PageRender} 1s;
`

const Header = css`
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: space-between;
`

const Title = css`
    width: 50%;
    height: 38px;
    font-size: 18px;
    line-height: 45px;
    color: #ff8906;
`

const ModifyButton = css`
    font-size: 18px;
    line-height:45px;
    cursor: pointer;
`

const HLine = css`
    border-bottom: 1px solid #e0e0e0;
    height: 0px;
`

const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`
const AccountInformBox = css`
    margin: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const InformLine = css`
    width: 100%;
    display: flex;
    justify-content:space-between;
    height: 44px;
`

const InformTitle = css`
    text-align: right;
    width: 10%;
    font-size: 15px;
    height: 44px;
    line-height: 44px;
`

const InformContent = css`
    width: 87%;
    font-size: 15px;
    height: 44px;
    line-height: 44px;
`

function MyAccountSetting(){
    return(
        <div css={ComponentLayOut}>
            <div css={AccountInformBox}>
                <div css={Header}>
                <div css={Title}>계정 정보</div>
                <div css={ModifyButton}>+ 수정</div>
                </div>
                <div css={HLineBold}/>
                <div css={InformLine}>
                    <div css={InformTitle}>ID</div>
                    <div css={InformContent}>bbbjihan</div>
                </div>
                <div css={InformLine}>
                    <div css={InformTitle}>비밀번호</div>
                    <div css={InformContent}>●●●●●●●●●●●</div>
                </div>
                <div css={InformLine}>
                    <div css={InformTitle}>이메일</div>
                    <div css={InformContent}>parkjihan5253@gmail.com</div>
                </div>
                <div css={InformLine}>
                    <div css={InformTitle}>이름</div>
                    <div css={InformContent}>박지한</div>
                </div>
                <div css={InformLine}>
                    <div css={InformTitle}>생년월일</div>
                    <div css={InformContent}>1996 - 08 - 14</div>
                </div>
                <div css={InformLine}>
                    <div css={InformTitle}>마지막 로그인</div>
                    <div css={InformContent}>2022 - 12 - 07, 15:36</div>
                </div>
                <div css={HLineBold}/>
            </div>
        </div>
    )
}

export default MyAccountSetting;
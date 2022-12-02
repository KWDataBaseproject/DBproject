/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 55%;
    display: flex;
`

const LeftContent = css`
    width: 33%;
`

const RightContent = css`
    width: 67%;
    display: flex;
    flex-direction: column;
`

const TextLine = css`
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: flex-start;
`

const UserNickName = css`
    width: 100%;
    text-align: center;
    font-size: 20px;
`

const RowTitle = css`
    width: 30%;
    font-size: 24px;
`

const RowContent = css`
    width: 60%;
    font-size: 40px;
    text-align: right;
`

const RowUnit = css`
    font-size: 20px;
    line-height: 350%;
    padding-left: 5px;
`

const HLineBold = css`
border-bottom: 1px solid black;
height: 0px;
`

function UserInform(){
    return(
        <div css={ComponentLayOut}>
            <div css={LeftContent}>
                <div css={TextLine}>
                    <div css={UserNickName}>홍　길　동 님</div>
                </div>
            </div>
            <div css={RightContent}>
                <div css={TextLine}>
                    <div css={RowTitle}>총 보유자산</div>
                    <div css={RowContent}>1,000,000,000</div>
                    <div css={RowUnit}>￦</div>
                </div>
                <div css={HLineBold}></div>
                <div css={TextLine}>
                    <div css={RowTitle}>총 매수금액</div>
                    <div css={RowContent}>500,000,000</div>
                    <div css={RowUnit}>￦</div>
                </div>
                <div css={TextLine}>
                    <div css={RowTitle}>총 평가손익</div>
                    <div css={RowContent}>+500,000,000</div>
                    <div css={RowUnit}>￦</div>
                </div>
                <div css={TextLine}>
                    <div css={RowTitle}>평가수익률</div>
                    <div css={RowContent}>100</div>
                    <div css={RowUnit}>%</div>
                </div>
            </div>
        </div>
    )
}

export default UserInform;
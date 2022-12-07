/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 59%;
    display: flex;
`

const LeftContent = css`
    width: 33%;
    display: flex;
    flex-direction: column;
`

const RightContent = css`
    width: 67%;
    display: flex;
    flex-direction: column;
`

const TextLine = css`
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: flex-start;
`

const UserNickName = css`
    width: 100%;
    text-align: center;
    font-size: 15px;
`

const RowTitle = css`
    width: 30%;
    font-size: 15px;
`

const RowContent = css`
    width: 60%;
    font-size: 30px;
    text-align: right;
`

const RowUnit = css`
    font-size: 15px;
    line-height: 60px;
    padding-left: 5px;
`

const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`

const CircleBox = css`
    display: flex;
    justify-content: center;
`

const Circle = css`
    width: 146px;
    height: 146px;
    background: grey;
    border-radius: 50%;
    display: flex;
    justify-content: center;
`
const CircleHAlign = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const InnerCircle = css`
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
`

function UserInform(){
    return(
        <div css={ComponentLayOut}>
            <div css={LeftContent}>
                <div css={TextLine}>
                    <div css={UserNickName}>홍　길　동 님</div>
                </div>
                <div css={CircleBox}>
                    <div css={Circle}>
                        <div css={CircleHAlign}>
                            <div css={InnerCircle}/>
                        </div>
                    </div>
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
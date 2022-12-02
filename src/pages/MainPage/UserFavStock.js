/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 37%;
    display: flex;
    flex-direction: column;
`

const Title = css`
    height: 38px;
    font-size: 24px;
    margin-left: 5px;
    color: #ff8906;
`

const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`

const HLine = css`
    border-bottom: 1px solid #E0E0E0;
    height: 0px;
    width: 100%;
`

const TextLine = css`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 26px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const StockNameBox = css`
    margin-left: 5px;
    width: 50%;
    display: flex;
`

const StockName = css`
    font-size: 20px;
    line-height: 26px;
`

const StockCode = css`
    margin-left: 3px;
    font-size: 12px;
    line-height: 32px;
    color:grey;
`

const StockPrice = css`
    font-size: 15px;
    width: 20%;
    line-height: 26px;
`

const StockChange = css`
    margin-right: 5px;
    font-size: 15px;
    width: 30%;
    line-height: 26px;
    text-align: right;
`

function UserFavStock(){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>관심종목</div>
            <div css={HLineBold}></div>
            <div css={TextLine}>
                <div css={StockNameBox}>
                    <div css={StockName}>카카오</div>
                    <div css={StockCode}>KRX: 035720</div>
                </div>
                <div css={StockPrice}>47,750 ￦</div>
                <div css={StockChange}>-2,050 ￦(4.12%)</div>
            </div>
            <div css={HLine}></div>
            <div css={TextLine}></div>
            <div css={HLine}></div>
            <div css={TextLine}></div>
            <div css={HLine}></div>
            <div css={TextLine}></div>
            <div css={HLine}></div>
            <div css={TextLine}></div>
            <div css={HLineBold}></div>
        </div>
    )
}

export default UserFavStock;
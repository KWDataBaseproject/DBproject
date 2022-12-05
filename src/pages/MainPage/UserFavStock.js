/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 39%;
    display: flex;
    flex-direction: column;
`

const Title = css`
    height: 38px;
    line-height: 45px;
    font-size: 18px;
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
    padding-top: 5px;
    padding-bottom: 5px;
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
    cursor: pointer;
`

const StockNameBox = css`
    margin-left: 5px;
    width: 50%;
    display: flex;
`

const StockName = css`
    font-size: 15px;
    line-height: 20px;
`

const StockCode = css`
    margin-left: 3px;
    font-size: 10px;
    line-height: 25px;
    color:grey;
`

const StockPrice = css`
    font-size: 13px;
    width: 20%;
    line-height: 20px;
`

const StockChange = css`
    margin-right: 5px;
    font-size: 13px;
    width: 30%;
    line-height: 20px;
    text-align: right;
`

const EmptyLine = css`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
            <div css={EmptyLine}></div>
            <div css={HLine}></div>
            <div css={EmptyLine}></div>
            <div css={HLine}></div>
            <div css={EmptyLine}></div>
            <div css={HLine}></div>
            <div css={EmptyLine}></div>
            <div css={HLineBold}></div>
        </div>
    )
}

export default UserFavStock;
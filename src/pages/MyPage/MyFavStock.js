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
    flex-direction: column;
    animation: ${PageRender} 1s;
`

const StockList = css`
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
    overflow-Y: auto;
    &::-webkit-scrollbar {
    width: 2px;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    }
`

const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`

const HLine = css`
    border-bottom: 1px solid #e0e0e0;
    height: 0px;
`

const Title = css`
    height: 38px;
    font-size: 18px;
    line-height: 45px;
    color: #ff8906;
`
const HeaderLine = css`
    width: 100%;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
`
const HeaderLineName = css`
    width: 16%;
    text-align: center;
`

const HeaderLineCurrentPrice = css`
    width: 16%;
    text-align: center;
`

const HeaderLineFluctuationRate = css`
    width: 16%;
    text-align: center;
`


const StockLine = css`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`
const StockLineNameCard = css`
width: 16%;
display: flex;
height: 50px;
flex-direction: column;
justify-content: center;
`
const StockLineName = css`
font-size: 18px;
text-align: center;
`
const StockLineCode = css`
font-size: 13px;
color: grey;
margin-top: -4px;
text-align: center;
`

function MyFavStock(){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>관심종목 관리</div>
            <div css={HLineBold}/>
            <div css={HeaderLine}>
                <div css={HeaderLineName}>종목명</div>
                <div css={HeaderLineCurrentPrice}>현재가</div>
                <div css={HeaderLineName}>등락률</div>
                <div css={HeaderLineName}>거래량</div>
                <div css={HeaderLineName}>매출액</div>
                <div css={HeaderLineName}>시가총액</div>
            </div>
            <div css={HLineBold}/>
            <div css={StockList}>
                <div css={StockLine}>
                    <div css={StockLineNameCard}>
                        <div css={StockLineName}>카카오</div>
                        <div css={StockLineCode}>035720</div>
                    </div>
                </div>
                <div css={HLine}/>
            </div>
        </div>
    )
}

export default MyFavStock;
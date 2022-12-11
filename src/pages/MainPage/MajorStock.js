/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import test from './test.png';

const ComponentLayOut = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LeftContent = css`
    width: 65%;
    display: flex;
    flex-direction: column;
`

const RightContent = css`
    width: 32%;
    display: flex;
    flex-direction: column;
`

const Title = css`
    height: 38px;
    font-size: 18px;
    line-height: 45px;
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

const ActiveTextLine = css`
    padding-top: 5px;
    padding-bottom: 5px;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #E0E0E0;
    cursor: pointer;
    font-weight: bold;
`

const TextLine = css`
    padding-top: 5px;
    padding-bottom: 5px;
    height: 30px;
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
    width: 30%;
    display: flex;
`

const StockName = css`
    font-size: 15px;
    line-height: 30px;
`

const StockCode = css`
    margin-left: 3px;
    font-size: 10px;
    line-height: 37px;
    color:grey;
`

const StockPrice = css`
    font-size: 13px;
    width: 15%;
    line-height: 30px;
`

const StockChange = css`
    font-size: 13px;
    width: 20%;
    line-height: 30px;
    text-align: right;
`

const StockTotal = css`
    margin-right: 5px;
    font-size: 13px;
    width: 30%;
    line-height: 30px;
    text-align: right;
`
const Header = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const DetailButton = css`
    fonst-size: 12px;
    margin-right: 5px;
    line-height: 38px;
    cursor: pointer;
`
const ChartBox = css`
    margin: 10px;
    height: 78%;
    display: flex;
    justify-content: center;
    flex-direction:column;
`
const Chart = css`
    margin-top: 30px;
    width: 100%;
    height: 80%;
`
const Content = css`
    display: flex;
    justify-content: space-between;
    height: 23px;
    line-height: 23px;
    font-size: 13px;
`
const ChartName = css`
    font-size: 15px;
`
const ChartPrice = css`
`
const ChartChange = css`
`
const ChartTotal = css`
    margin-right: 5px;
`

function MajorStock(){
    const [listIndex, setListIndex] = useState(0);

    return(
        <div css={ComponentLayOut}>
            <div css={LeftContent}>
                <div css={Title}>인기종목 TOP 5</div>
                <div css={HLineBold}></div>
                <div css={listIndex === 1 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(1);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>삼성전자</div>
                        <div css={StockCode}>KRX: 005930</div>
                    </div>
                    <div css={StockPrice}>55,500 ￦</div>
                    <div css={StockChange}>- 300 ￦(0.54%)</div>
                    <div css={StockTotal}>331조 3,229억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={listIndex === 2 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(2);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>- 2,050 ￦(4.12%)</div>
                    <div css={StockTotal}>21조 2,641억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={listIndex === 3 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(3);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>이엔플러스</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>4,920 ￦</div>
                    <div css={StockChange}>+ 1,050 ￦(27.13%)</div>
                    <div css={StockTotal}>2,870억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={listIndex === 4 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(4);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>이엔플러스</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>4,920 ￦</div>
                    <div css={StockChange}>+ 1,050 ￦(27.13%)</div>
                    <div css={StockTotal}>2,870억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={listIndex === 5 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(5);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>이엔플러스</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>4,920 ￦</div>
                    <div css={StockChange}>+ 1,050 ￦(27.13%)</div>
                    <div css={StockTotal}>2,870억 원</div>
                </div>
                <div css={HLineBold}></div>
            </div>
            <div css={RightContent}>
                <div css={Header}>
                    <div css={Title}>미니차트</div>
                    <div css={DetailButton}>더보기 +</div>
                </div>
                <div css={HLineBold}></div>
                <div css={ChartBox}>
                    <div css={Content}>
                        <div css={ChartName}>삼성전자</div>
                        <div css={ChartPrice}>55,500 ￦</div>
                        <div css={ChartChange}>- 300 ￦(0.54%)</div>
                        <div css={ChartTotal}>331조 3,229억 원</div>
                    </div>
                    <img css={Chart} src={test} alt="CHART"/>
                </div>
                <div css={HLineBold}></div>
            </div>
        </div>
    )
}

export default MajorStock;
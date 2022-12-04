/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import TapButton from '../../common/TapButton';

const ComponentLayOut = css`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Tap = css`
    display: flex;
    justify-content: flex-start;
    border-bottom: solid 1px grey;
`

const TapButtons = css`
    width: 20%;
`

const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`

const HLine = css`
    border-bottom: 1px solid #e0e0e0;
    height: 0px;
`

const HeaderLine = css`
    width: 100%;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
`

const HeaderLineContent = css`
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
const StockLineQuantity = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
`
const StockLineAveragePrice = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
`
const StockLineBuyPrice = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
    font-size: 15px;
`
const StockLineNowPrice = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
    font-size: 15px;
`
const StockLineProfitCard = css`
    width: 16%;
    display: flex;
    text-align: right;
    flex-direction: column;
    justify-content: center;
`
const StockLineProfitRatio = css`
    display: flex;
    font-size: 18px;
`
const StockLineProfitValue = css`
    display: flex;
    font-size: 13px;
    margin-top: -5px;
`
const StockLineValue = css`
    width: 75%;
    margin-right: 5px;
`

const StockLineUnit = css`
`

function MyStockInform(){
    const [tapIndex, setTapIndex] = useState(0);
    return(
        <div css={ComponentLayOut}>
            <div css={Tap}>
                <a css={TapButtons} onClick={()=>{setTapIndex(0);}}>
                    <TapButton content={"보유자산 목록"} index={0} tapIndex={tapIndex}/>
                </a>
                <a css={TapButtons} onClick={()=>{setTapIndex(1);}}>
                    <TapButton content={"매매종목"} index={1} tapIndex={tapIndex}/>
                </a>
                <a css={TapButtons} onClick={()=>{setTapIndex(2);}}>
                    <TapButton content={"개인정보"} index={2} tapIndex={tapIndex}/>
                </a>
            </div>
            <div css={HeaderLine}>
                <div css={HeaderLineContent}>종목명</div>
                <div css={HeaderLineContent}>보유수량</div>
                <div css={HeaderLineContent}>매수평균가</div>
                <div css={HeaderLineContent}>매수금액</div>
                <div css={HeaderLineContent}>평가금액</div>
                <div css={HeaderLineContent}>평가손익 (%)</div>
            </div>    
            <div css={HLineBold}/>
            <div css={StockLine}>
                <div css={StockLineNameCard}>
                <div css={StockLineName}>개꿀주</div>
                <div css={StockLineCode}>000000</div>
                </div>
                <div css={StockLineQuantity}>
                    <div css={StockLineValue}>100,000</div>
                    <div css={StockLineUnit}> 주</div>
                </div>
                <div css={StockLineAveragePrice}>
                    <div css={StockLineValue}>5,000</div>
                    <div css={StockLineUnit}> ￦</div>
                </div>
                    <div css={StockLineBuyPrice}>
                <div css={StockLineValue}>500,000,000</div>
                    <div css={StockLineUnit}> ￦</div>
                </div>
                <div css={StockLineNowPrice}>
                    <div css={StockLineValue}>1,000,000,000</div>
                    <div css={StockLineUnit}> ￦</div>
                </div>
                <div css={StockLineProfitCard}>
                    <div css={StockLineProfitRatio}>
                        <div css={StockLineValue}>+ 100</div>
                        <div css={StockLineUnit}> %</div>
                    </div>
                    <div css={StockLineProfitValue}>
                        <div css={StockLineValue}>+ 500,000,000</div>
                        <div css={StockLineUnit}> ￦</div>
                    </div>
                </div>
            </div>
            <div css={HLine}/>
            <div css={StockLine}/>
            <div css={HLine}/>
            <div css={StockLine}/>
            <div css={HLine}/>
            <div css={StockLine}/>
            <div css={HLineBold}/>
        </div>
    )

}

export default MyStockInform;
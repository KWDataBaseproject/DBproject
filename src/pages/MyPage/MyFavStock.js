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

const HeaderLineExchangeVolume = css`
    width: 16%;
    text-align: center;
`

const HeaderLineSales = css`
    width: 16%;
    text-align: center;
`

const HeaderLineMarketCapitalization = css`
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

const StockLineCurrentPrice = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
`
const StockLineFluctuationRate = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
`
const StockLineExchangeVolume = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
    font-size: 15px;
`
const StockLineSales = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
    font-size: 15px;
`
const StockLineMarketCapitalization = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
    font-size: 15px;
`

const StockLineValue = css`
    width: 75%;
    margin-right: 5px;
`
const StockLineUnit = css`
`

function MyFavStock({token}){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>???????????? ??????</div>
            <div css={HLineBold}/>
            <div css={HeaderLine}>
                <div css={HeaderLineName}>?????????</div>
                <div css={HeaderLineCurrentPrice}>?????????</div>
                <div css={HeaderLineFluctuationRate}>?????????</div>
                <div css={HeaderLineExchangeVolume}>?????????</div>
                <div css={HeaderLineSales}>?????????</div>
                <div css={HeaderLineMarketCapitalization}>????????????</div>
            </div>
            <div css={HLineBold}/>
            <div css={StockList}>
            <div css={StockLine}>
                <div css={StockLineNameCard}>
                <div css={StockLineName}>?????????</div>
                <div css={StockLineCode}>035720</div>
                </div>
                <div css={StockLineCurrentPrice}>
                    <div css={StockLineValue}>5670</div>
                    <div css={StockLineUnit}> ???</div>
                </div>
                <div css={StockLineFluctuationRate}>
                    <div css={StockLineValue}>+1.93</div>
                    <div css={StockLineUnit}> %</div>
                </div>
                    <div css={StockLineExchangeVolume}>
                <div css={StockLineValue}>2,034,471</div>
                    <div css={StockLineUnit}> ???</div>
                </div>
                <div css={StockLineSales}>
                    <div css={StockLineValue}>18,587</div>
                    <div css={StockLineUnit}> ???</div>
                </div>
                <div css={StockLineMarketCapitalization}>                 
                    <div css={StockLineValue}>252,506</div>
                    <div css={StockLineUnit}> ???</div>                  
                </div>
            </div>
            <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
            </div>
        </div>   
    )
}

export default MyFavStock;
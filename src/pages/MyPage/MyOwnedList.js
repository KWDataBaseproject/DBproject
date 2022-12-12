/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
const HeaderLineQuantity = css`
    width: 16%;
    text-align: center;
`
const HeaderLineAveragePrice = css`
    width: 16%;
    text-align: center;
`
const HeaderLineBuyPrice = css`
    width: 16%;
    text-align: center;
`
const HeaderLineNowPrice = css`
    width: 16%;
    text-align: center;
`
const HeaderLineProfit = css`
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
    height: 50px;
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

function MyOwnedList({ token }){
    const [userOwn, setUserOwn] = useState(null);

    useEffect(() => {
        axios.get('https://db2.ccppoo.net/user/stock',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        ).then(
            
            (res)=>{
                setUserOwn(res.data);
                console.log(res);               
            }
        ).catch(
            (err)=>{
                console.log(err);             
            }
        )
    },[ token ])
    console.log(userOwn, "모름");
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>보유자산 목록</div>
            <div css={HLineBold}/>
            <div css={HeaderLine}>
                <div css={HeaderLineName}>종목명</div>
                <div css={HeaderLineQuantity}>보유수량</div>
                <div css={HeaderLineAveragePrice}>매수평균가</div>
                <div css={HeaderLineBuyPrice}>매수금액</div>
                <div css={HeaderLineNowPrice}>평가금액</div>
                <div css={HeaderLineProfit}>평가손익 (%)</div>
            </div>
            <div css={HLineBold}/>
            <div css={StockList}>
            
            {userOwn === null ? "" :                     
                    userOwn.map((e)=>{
                        return(<div css={StockLine}>
                            <div css={StockLineNameCard}>
                            <div css={StockLineName}>{e.isu_name_short}</div>
                            <div css={StockLineCode}>{e.ISU_CODE}</div>
                            </div>
                            <div css={StockLineQuantity}>
                                <div css={StockLineValue}>{e.count}</div>
                                <div css={StockLineUnit}> 주</div>
                            </div>
                            <div css={StockLineAveragePrice}>
                                <div css={StockLineValue}>5,000</div>
                                <div css={StockLineUnit}> ￦</div>
                            </div>
                                <div css={StockLineBuyPrice}>
                            <div css={StockLineValue}>{e.buy_price}</div>
                                <div css={StockLineUnit}> ￦</div>
                            </div>
                            <div css={StockLineNowPrice}>
                                <div css={StockLineValue}>2,125,464,232</div>
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
                        </div>)
                        
                    })
                    
                    
            }
                
                
            
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

export default MyOwnedList;
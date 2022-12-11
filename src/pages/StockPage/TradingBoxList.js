/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ComponentLayOut = css`
    display: flex;
    flex-direction: column;
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

const Header = css`
    width: 100%;
    height: 20px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
`

const HeaderStockName = css`
    width:40%;
    text-align: center;
`

const HeaderType = css` 
    width: 10%;
    text-align; center;
`

const HeaderPrice = css`
    width:15%;
    text-align: center;
`

const HeaderQuantity = css`
    width:15%;
    text-align: center;
`

const HeaderState = css`
    width:15%;
    text-align: center;
`

const Line = css`
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
`

const Type = css`
    width: 10%;
    text-align: center;
`

const StockCode = css`
    width: 40%;
    text-align: center;
`

const Price = css`
    width: 15%;
    text-align: center;
`

const Quantity = css`
    width: 15%;
    text-align: center;
`

const State = css`
    width: 15%;
    text-align: center;
`

const CancelButton = css`
    color:grey;
    height: 15px;
    line-height: 15px;
    border: solid 1px grey;
    margin: 1px;
    margin-left: 3px;
    margin-right: 3px;
    cursor: pointer;
`

function TradingBoxList({token, stockCode, stockName}){
    const [tradeList, setTradeList] = useState();
    useEffect(() => {
        axios.get('https://db2.ccppoo.net/market/history',
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        )
        .then(
            (res)=>{
                setTradeList(res.data);
                console.log(res.data);
            }
        )
        .catch((err)=>{
                console.log(err);
            }
        )
    },[ token ])
    return(
        <div css={ComponentLayOut}>
            <div css={Header}>
                <div css={HeaderType}>구분</div>
                <div css={HeaderStockName}>종목명</div>
                <div css={HeaderPrice}>호가</div>
                <div css={HeaderQuantity}>주문량</div>
                <div css={HeaderState}>상태</div>
                <div css={HeaderState}>취소</div>
            </div>
            <div css={HLine}/>
            {tradeList?
                tradeList.map((tuple)=>{
                    return(<div css={Line} key={tuple.ID}>
                        <div css={Type}>{tuple.trans_type === 1 ? "매수" : "매도"}</div>
                        <div css={StockCode}>{tuple.isu_name_short}</div>
                        <div css={Price}>{tuple.price}</div>
                        <div css={Quantity}>{tuple.volume}</div>
                        <div css={State}>{tuple.state_code === 1 ? "진행 중" : "완료"}</div>
                        <div css={State}><div css={CancelButton}>취소</div></div>
                    </div>)
                })
            :
                ""
            }
        </div>
    )
}

export default TradingBoxList;
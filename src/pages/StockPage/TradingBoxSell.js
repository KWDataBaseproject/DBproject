/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ComponentLayOut = css`
`
const InputBox = css`
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const InputBoxLine = css`
    display: flex; 
    justify-content: space-between;
    height: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const InputTitle = css`
    font-size: 13px;
    line-height: 18px;
    text-align: right;
    width: 40%;
    margin-right: 10px;
`

const StockNameBox = css`
    display: flex;
    justify-content: flex-end;
`

const StockName = css`
    font-size: 15px;
    line-height: 18px;
`

const StockCode = css`
    font-size: 13px;
    line-height: 18px;
    color: grey;
    margin-left: 3px;
    margin-right: 13px;
`

const InputText = css`
    margin-right: 10px;
    width: 45%;
    font-size: 13px;
    text-align:right;
`

const ButtonLine = css`
    margin-top:10px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
`

const SendButton = css`
    margin-left: 10px;
    width: 150px;
    height: 30px;
    background: #00aaff;
    text-align: center;
    font-size: 15px;
    line-height: 30px;
    color: white;
    cursor: pointer;
`

const ResetButton = css`
    margin-right: 10px;
    width: 80px;
    height: 30px;
    background: #7C7B7B;
    text-align: center;
    font-size: 15px;
    line-height: 30px;
    color: white;
    cursor: pointer;
`

const TotalPrice = css`
    margin-right: 10px;
    font-size: 15px;
    line-hegiht: 18px;
`

function TradingBoxBuy({token, stockCode, stockName}){
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const changePrice = (e) => {
        setPrice(e.target.value);
    }
    const changeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    useEffect(() => {
        const p = price.toString().replace(',', '');
        const q = quantity.toString().replace(',', '');
        let value = parseInt(p) * parseInt(q);

        console.log(value);
        setTotalPrice(value.toLocaleString('ko-KR'));
    },[price, quantity])

    const reset = () => {
        setPrice(0);
        setQuantity(0);
    }

    const SellStock = () => {
        axios.post('https://db2.ccppoo.net/market/sell',{
            ISU_CODE : 'HK0000057197',
            quantity : quantity,
            trans_type: 1,
            price : price
        },
        {
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        )
        .then(
            (res)=>{
                console.log(res);
                reset();
            }
        )
        .catch((err)=>{
                console.log("sell ERROR")
                console.log(err);
                reset();
            }
        )
    }

    return(
        <div css={ComponentLayOut}>
            <div css={InputBox}>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>종목명</div>
                    <div css={StockNameBox}>
                    <div css={StockName}>카카오</div>
                    <div css={StockCode}>035720</div>
                    </div>
                </div>
                <div css={InputBoxLine}>
                </div>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>매도가격</div>
                    <input onChange={(e)=>{changePrice(e);}} css={InputText} type="text" placeholder="매도가격"/>
                </div>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>주문수량</div>
                    <input onChange={(e)=>{changeQuantity(e);}} css={InputText} type="text" placeholder="주문수량"/>
                </div>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>주문총액</div>
                    <div css={TotalPrice}>{totalPrice} ￦</div>
                </div>
            </div>
            <div css={ButtonLine}>
                <div css={SendButton} onClick={SellStock}>
                    매도
                </div>
                <div css={ResetButton} onClick={reset}>
                    초기화
                </div>
            </div>
        </div>
    )
}

export default TradingBoxBuy;
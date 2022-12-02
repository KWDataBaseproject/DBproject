/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import TapButton from './TapButton';

const ComponentLayOut = css`
    width: 18.5%;
    height: 240px;
    position: fixed;
`

const Tap = css`
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px grey;
`

const TapButtons = css`
    width: 30%;
`

const InputBox = css`
    margin-top: 5px;
    width: 100%;
    background:grey;
    display: flex;
    flex-direction: column;
`

const SendButton = css`

`

const ResetButton = css`

`

const InputBoxLine = css`
    display: flex; 
    justify-content: space-between;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const InputTitle = css`
    font-size: 16px;
    line-height: 30px;
    text-align: right;
    width: 25%;
    margin-right: 10px;
`

const InputText = css`
    margin-right: 10px;
    width: 68%;
    font-size:16px;
    text-align:right;
`

const RadioLine = css`
    width: 68%;
    text-align:left;
`

function TradingBox(){
    const [tapIndex, setTapIndex] = useState(0);
    return(
        <div css={ComponentLayOut}>
            <div css={Tap}>
                <a css={TapButtons} onClick={()=>{setTapIndex(0);}}>
                    <TapButton content={"매수"} index={0} tapIndex={tapIndex}/>
                </a>
                <a css={TapButtons} onClick={()=>{setTapIndex(1);}}>
                    <TapButton content={"매도"} index={1} tapIndex={tapIndex}/>
                </a>
                <a css={TapButtons} onClick={()=>{setTapIndex(2);}}>
                    <TapButton content={"거래내역"} index={2} tapIndex={tapIndex}/>
                </a>
            </div>
            <div css={InputBox}>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>종목명</div>
                    <input css={InputText} type="text"/>
                </div>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>주문구분</div>
                    <div css={RadioLine}>
                        <input type="radio"/> 지정가
                        <input type="radio"/> 시장가
                    </div>
                </div>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>매수가격</div>
                    <input css={InputText} type="text"/>
                </div>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>주문수량</div>
                    <input css={InputText} type="text"/>
                </div>
                <div css={InputBoxLine}>
                    <div css={InputTitle}>주문총액</div>
                    <input css={InputText} type="text"/>
                </div>
            </div>
        </div>
    )
}

export default TradingBox;
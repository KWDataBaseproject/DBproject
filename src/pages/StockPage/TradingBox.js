/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import TapButton from '../../common/TapButton';

const ComponentLayOut = css`
    width: 270px;
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

const InputText = css`
    margin-right: 10px;
    width: 55%;
    font-size: 13px;
    text-align:right;
`

const RadioLine = css`
    width: 55%;
    text-align: left;
    font-size: 13px;
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
    background: #FFA1A1;
    text-align: center;
    font-size: 15px;
    line-height: 30px;
    color: white;
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
            <div css={ButtonLine}>
                <div css={SendButton}>
                    매수
                </div>
                <div css={ResetButton}>
                    초기화
                </div>
            </div>
        </div>
    )
}

export default TradingBox;
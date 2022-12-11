/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import TapButton from '../../common/TapButton';
import TradingBoxBuy from './TradingBoxBuy';
import TradingBoxList from './TradingBoxList';
import TradingBoxSell from './TradingBoxSell';

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
    cursor: pointer;
`

function TradingBox({ token, stockCode, stockName }){
    const [tapIndex, setTapIndex] = useState(0);
    return(
        <div css={ComponentLayOut}>
            <div css={Tap}>
                <div css={TapButtons} onClick={()=>{setTapIndex(0);}}>
                    <TapButton content={"매수"} index={0} tapIndex={tapIndex}/>
                </div>
                <div css={TapButtons} onClick={()=>{setTapIndex(1);}}>
                    <TapButton content={"매도"} index={1} tapIndex={tapIndex}/>
                </div>
                <div css={TapButtons} onClick={()=>{setTapIndex(2);}}>
                    <TapButton content={"거래내역"} index={2} tapIndex={tapIndex}/>
                </div>
            </div>
            {tapIndex === 0 ?
                <TradingBoxBuy token={token} stockCode={stockCode} stockName={stockName}/>
            :
                (tapIndex === 1?
                    <TradingBoxSell token={token} stockCode={stockCode} stockName={stockName}/>
                :
                    (tapIndex === 2?
                        <TradingBoxList token={token} stockCode={stockCode} stockName={stockName}/>
                    :
                        "ERROR"
                    )
                )            
            }
        </div>
    )
}

export default TradingBox;
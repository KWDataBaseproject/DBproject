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
const HeaderLineQuantity = css`
    width: 16%;
    text-align: center;
`
const HeaderLinePrice = css`
    width: 16%;
    text-align: center;
`
const HeaderLineTotalPrice = css`
    width: 16%;
    text-align: center;
`
const HeaderLineTime = css`
    width: 16%;
    text-align: center;
`
const HeaderLineStatus = css`
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
const StockLineQuantity = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
    font-size: 15px;
`
const StockLinePrice = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
    font-size: 15px;
`
const StockLineTotalPrice = css`
    width: 16%;
    display: flex;
    line-height: 50px;
    text-align: right;
    font-size: 15px;
`
const StockLineTimeCard = css`
    width: 16%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size:15px;
`
const StockLineDate = css`
    text-align:center;
`
const StockLineTime = css`
    text-align:center;
    margin-top: -5px;
`
const StockLineStatus = css`
    width: 16%;
    line-height: 50px;
    text-align: center;
    font-size: 15px;
`
const StockLineValue = css`
    width: 75%;
    margin-right: 5px;
`
const StockLineUnit = css`
`

function MyTradeList({ token }){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>자산 매매내역</div>
            <div css={HLineBold}/>
            <div css={HeaderLine}>
                <div css={HeaderLineName}>종목명</div>
                <div css={HeaderLineQuantity}>거래수량</div>
                <div css={HeaderLinePrice}>거래단가</div>
                <div css={HeaderLineTotalPrice}>거래금액</div>
                <div css={HeaderLineTime}>주문시간</div>
                <div css={HeaderLineStatus}>거래현황</div>
            </div>
            <div css={HLineBold}/>
            <div css={StockList}>
                <div css={StockLine}>
                    <div css={StockLineNameCard}>
                        <div css={StockLineName}>광운대학교</div>
                        <div css={StockLineCode}>000000</div>
                    </div>
                    <div css={StockLineQuantity}>
                        <div css={StockLineValue}>100</div>
                        <div css={StockLineUnit}>주</div>
                    </div>
                    <div css={StockLinePrice}>
                        <div css={StockLineValue}>30</div>
                        <div css={StockLineUnit}>￦</div>
                    </div>
                    <div css={StockLineTotalPrice}>
                        <div css={StockLineValue}>3,000</div>
                        <div css={StockLineUnit}>￦</div>
                    </div>
                    <div css={StockLineTimeCard}>
                        <div css={StockLineDate}>2022-10-20</div>
                        <div css={StockLineTime}>PM 20:15</div>
                    </div>
                    <div css={StockLineStatus}>매도 대기중</div>
                </div>
                <div css={HLine}/>
                <div css={StockLine}>
                    <div css={StockLineNameCard}>
                        <div css={StockLineName}>개꿀주</div>
                        <div css={StockLineCode}>000000</div>
                    </div>
                    <div css={StockLineQuantity}>
                        <div css={StockLineValue}>100,000</div>
                        <div css={StockLineUnit}>주</div>
                    </div>
                    <div css={StockLinePrice}>
                        <div css={StockLineValue}>5,000</div>
                        <div css={StockLineUnit}>￦</div>
                    </div>
                    <div css={StockLineTotalPrice}>
                        <div css={StockLineValue}>500,000,000</div>
                        <div css={StockLineUnit}>￦</div>
                    </div>
                    <div css={StockLineTimeCard}>
                        <div css={StockLineDate}>2022-10-20</div>
                        <div css={StockLineTime}>PM 13:15</div>
                    </div>
                    <div css={StockLineStatus}>거래 완료</div>
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
                <div css={HLine}/>
                <div css={StockLine}><div css={StockLineNameCard}/></div>
            </div>
        </div>
    )
}

export default MyTradeList;
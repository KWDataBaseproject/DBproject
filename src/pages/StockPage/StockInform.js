/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 100%;
    height: 260px;
    background: white;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
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

const HeaderLine = css`
    height: 50px;
    width: 100%;
    display: flex;
`

const HeaderStockIcon = css`
    height: 30px;
    width: 30px;
    background: #BEAB00;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 8px;
    line-height: 30px;
    text-align: center;
`

const HeaderStockName = css`
    font-size: 24px;
    margin-left: 10px;
    line-height: 50px;
`

const HeaderStockCode = css`
    font-size: 18px;
    color: grey;
    margin-left: 50px;
    line-height: 55px;
`

const ValuesBox = css`
    display:flex;
    justify-content: space-between
`

const BoxLeft = css`
    width: 40%;
    margin-left: 20px;
    display:flex;
    flex-direction:column;
`

const BoxRight = css`
    width: 50%;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
`

const ValueBox = css`
    display: flex;
    flex-direction: column;
`

const ValueTitle = css`
    margin-top: 10px;
    font-size: 24px;
`

const ValueLine = css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
`

const Value = css`
    font-size: 28px;
    text-align: right;
`

const ValueUnit = css`
    font-size: 18px;
    margin-left: 10px;
    line-height: 46px;
`

const ChangeLine = css`
    display: flex;
    justify-content: space-between;
`

const ChangePercent = css`
    font-size: 26px;
`

const ChangeValues = css`
    display: flex;
    justify-content: flex-end;
`



function StockInform(){
    return(
        <div css={ComponentLayOut}>
            <div css={HeaderLine}>
                <div css={HeaderStockIcon}>kakao</div>
                <div css={HeaderStockName}>카카오</div>
                <div css={HeaderStockCode}>KOSPI 035720</div>
            </div>
            <div css={HLineBold}/>
            <div css={ValuesBox}>
                <div css={BoxLeft}>
                    <div css={ValueBox}>
                        <div css={ValueTitle}>시가</div>
                        <div css={ValueLine}>
                            <div css={Value}>49,800.00</div>
                            <div css={ValueUnit}>￦</div>
                        </div>
                    </div>
                    <div css={HLine}/>
                    <div css={ChangeLine}>
                        <div css={ChangePercent}>- 4.12%</div>
                        <div css={ChangeValues}>
                            <div css={Value}>- 2,050</div>
                            <div css={ValueUnit}>￦</div>
                        </div>
                    </div>
                </div>
                <div css={BoxRight}>
                    <div css={ValueBox}>
                        <div css={ValueTitle}>시가총액</div>
                        <div css={ValueLine}>
                            <div css={Value}>21조 2,641억</div>
                            <div css={ValueUnit}>￦</div>
                        </div>
                    </div>
                    <div css={HLine}/>
                    <div css={ValueBox}>
                        <div css={ValueTitle}>거래량</div>
                        <div css={ValueLine}>
                            <div css={Value}>4,207,254</div>
                            <div css={ValueUnit}>주</div>
                        </div>
                    </div>
                </div>
            </div>
            <div css={HLineBold}/>
        </div>
    )
}

export default StockInform;
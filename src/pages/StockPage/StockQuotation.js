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

const BoxLine = css`
    width: 100%;
    height: 10%;
    display:flex;
    flex-direction:row;
    justify-content: space-between
`

const BoxValue = css`
    width: 20%;
    display:flex;
    flex-direction:column;
    text-align: center;
`

function StockQuotation(){
    return(
        <div css={ComponentLayOut}>
            <div css={HLineBold}></div>
            <div css={BoxLine}>
                <div css={BoxValue}>현재가</div>
                <div css={BoxValue}>전일대비</div>
                <div css={BoxValue}>시가</div>
                <div css={BoxValue}>고가</div>
                <div css={BoxValue}>저가</div>
            </div>
            <div css={HLine}></div>
            <div css={BoxLine}>
                <div css={BoxValue}>58,100</div>
                <div css={BoxValue}>현재가</div>
                <div css={BoxValue}>현재가</div>
                <div css={BoxValue}>현재가</div>
                <div css={BoxValue}>현재가</div>
            </div>
            
        </div>
    )
}

export default StockQuotation;
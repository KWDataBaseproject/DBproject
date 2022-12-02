/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import StockDetail from './StockDetail';
import StockList from './StockList';
import TradingBox from './TradingBox';

const PageRender = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const PageLayOut = css`
    height: 100%;
    display: flex;
    animation: ${PageRender} 1s;
    justify-content:space-between;
    margin-top:30px;
`

const LeftContent = css`
    width: 30%;
    display: flex;
    flex-direction: column;
`

const RightContent = css`
    width: 66%;
`

function StockPage(){
    return(
        <div css={PageLayOut}>
            <div css={LeftContent}>
                <TradingBox/>
                <StockList/>
            </div>
            <div css={RightContent}>
                <StockDetail/>
            </div>
        </div>
    );
}

export default StockPage;
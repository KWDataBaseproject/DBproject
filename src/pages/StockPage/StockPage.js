/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import StockDetail from './StockDetail';
import StockList from './TradeStockList';
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
    display: flex;
    animation: ${PageRender} 1s;
    justify-content:space-between;
    margin-top:30px;
`

function StockPage(){
    return(
        <div css={PageLayOut}>
                <TradingBox/>
                <StockList/>
                <StockDetail/>
                
                
        </div>
    );
}

export default StockPage;
/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { useState } from 'react';
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

function StockPage({ token }){
    const [stockCode, setStockCode] = useState('');
    const [stockName, setStockName] = useState('');
    return(
        <div css={PageLayOut}>
                <TradingBox token={token} stockCode={stockCode} stockName={stockName}/>
                <StockList token={token} setStockCode={setStockCode} setStockName={setStockName}/>
                <StockDetail token={token} stockCode={stockCode} stockName={stockName}/>
        </div>
    );
}

export default StockPage;
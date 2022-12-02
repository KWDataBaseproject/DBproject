/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 18.5%;
    height: 720px;
    margin-top: 280px;
    position: fixed;
    background:#E0E0E0;
`

function StockList(){
    return(
        <div css={ComponentLayOut}>
            StockList
        </div>
    )
}

export default StockList;
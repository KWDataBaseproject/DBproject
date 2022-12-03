/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import StockInform from './StockInform';
import test from '../MainPage/test.png';

const ComponentLayOut = css`
    position: fixed;
    margin-left: 300px;
    width: 760px;
    height: 800px;
    display: flex;
    flex-direction: column;
    overflow-Y: auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
    }
`

const Chart = css`
`

const InformBox = css`
`

function StockDetail(){
    return(
        <div css={ComponentLayOut}>
            <div css={InformBox}><StockInform/></div>
            <img css={Chart} src={test}/>
        </div>
    )
}

export default StockDetail;
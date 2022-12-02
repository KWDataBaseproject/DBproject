/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import StockInform from './StockInform';

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

const InformBox = css`
`

function StockDetail(){
    return(
        <div css={ComponentLayOut}>
            <div css={InformBox}><StockInform/></div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
            <div>OVERFLOWTEST</div>
        </div>
    )
}

export default StockDetail;
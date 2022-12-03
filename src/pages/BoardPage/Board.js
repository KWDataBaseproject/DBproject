/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    position: fixed;
    margin-left: 300px;
    width: 760px;
    height: 86vh;
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

function Board(){
    return(
        <div css={ComponentLayOut}>
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

export default Board;